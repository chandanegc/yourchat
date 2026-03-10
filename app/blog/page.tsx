"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState, useEffect, useCallback } from "react";

const API_BASE = "https://sandybrown-trout-566594.hostingersite.com/wp-json/wp/v2";
const POSTS_PER_PAGE = 6;

function stripHtml(html = "") {
  return html.replace(/<[^>]*>/g, "").replace(/&[a-z]+;/gi, " ").trim();
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric", month: "short", day: "numeric",
  });
}

function readTime(content = "") {
  const words = stripHtml(content).split(/\s+/).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}

function getCategoryColor(index) {
  const colors = [
    { bg: "#e0f2fe", text: "#0369a1", dot: "#0ea5e9" },
    { bg: "#f0fdf4", text: "#15803d", dot: "#22c55e" },
    { bg: "#fef3c7", text: "#b45309", dot: "#f59e0b" },
    { bg: "#fce7f3", text: "#9d174d", dot: "#ec4899" },
    { bg: "#ede9fe", text: "#6d28d9", dot: "#8b5cf6" },
    { bg: "#ffedd5", text: "#c2410c", dot: "#f97316" },
    { bg: "#f0f9ff", text: "#0c4a6e", dot: "#0284c7" },
    { bg: "#fdf2f8", text: "#831843", dot: "#db2777" },
  ];
  return colors[index % colors.length];
}

// ─── Skeleton Loader ────────────────────────────────────────────────────────
function SkeletonCard() {
  return (
    <div style={styles.card}>
      <div style={{ ...styles.skeleton, height: 200, borderRadius: "12px 12px 0 0", marginBottom: 0 }} />
      <div style={{ padding: "20px" }}>
        <div style={{ ...styles.skeleton, height: 14, width: "40%", marginBottom: 14 }} />
        <div style={{ ...styles.skeleton, height: 18, width: "90%", marginBottom: 8 }} />
        <div style={{ ...styles.skeleton, height: 18, width: "70%", marginBottom: 16 }} />
        <div style={{ ...styles.skeleton, height: 13, width: "60%", marginBottom: 8 }} />
        <div style={{ ...styles.skeleton, height: 13, width: "80%", marginBottom: 0 }} />
      </div>
    </div>
  );
}

// ─── Post Card ───────────────────────────────────────────────────────────────
function PostCard({ post, catColors }) {
  const [hovered, setHovered] = useState(false);
  const category = post._embedded?.["wp:term"]?.[0]?.[0];
  const color = catColors[category?.id] || getCategoryColor(0);
  const thumb = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const excerpt = stripHtml(post.excerpt?.rendered || "");

  return (
    <article
      style={{
        ...styles.card,
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 20px 60px rgba(0,0,0,0.12)"
          : "0 4px 20px rgba(0,0,0,0.06)",
        transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Thumbnail */}
      <div style={styles.cardThumb}>
        {thumb ? (
          <img src={thumb} alt={stripHtml(post.title?.rendered)} style={styles.thumbImg} />
        ) : (
          <div style={{ ...styles.thumbPlaceholder, background: `linear-gradient(135deg, ${color.dot}33, ${color.dot}66)` }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={color.dot} strokeWidth="1.5">
              <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
          </div>
        )}
        {category && (
          <span style={{ ...styles.catBadge, background: color.bg, color: color.text }}>
            <span style={{ ...styles.catDot, background: color.dot }} />
            {category.name}
          </span>
        )}
      </div>

      {/* Content */}
      <div style={styles.cardBody}>
        <h3 style={{ ...styles.cardTitle, color: hovered ? "#2563eb" : "#111827" }}>
          <span dangerouslySetInnerHTML={{ __html: post.title?.rendered }} />
        </h3>
        <p style={styles.cardExcerpt}>{excerpt.slice(0, 120)}{excerpt.length > 120 ? "…" : ""}</p>

        <div style={styles.cardMeta}>
          <div style={styles.metaItem}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
              <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            <span>{formatDate(post.date)}</span>
          </div>
          <div style={styles.metaItem}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            <span>{readTime(post.content?.rendered)}</span>
          </div>
        </div>

        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...styles.readBtn, background: hovered ? "#2563eb" : "#f3f4f6", color: hovered ? "#fff" : "#374151" }}
        >
          Read Article
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transition: "transform 0.2s", transform: hovered ? "translateX(3px)" : "none" }}>
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </article>
  );
}

// ─── Featured Post ───────────────────────────────────────────────────────────
function FeaturedPost({ post }) {
  const [hovered, setHovered] = useState(false);
  const thumb = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const category = post._embedded?.["wp:term"]?.[0]?.[0];
  const excerpt = stripHtml(post.excerpt?.rendered || "").slice(0, 200);

  return (
    <article
      style={{
        ...styles.featuredCard,
        boxShadow: hovered ? "0 32px 80px rgba(37,99,235,0.2)" : "0 8px 40px rgba(37,99,235,0.1)",
        transition: "box-shadow 0.4s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={styles.featuredGrid}>
        <div style={styles.featuredContent}>
          <div style={styles.featuredTopRow}>
            <span style={styles.featuredBadge}>✦ Featured</span>
            {category && <span style={styles.featuredCat}>{category.name}</span>}
          </div>
          <h2 style={styles.featuredTitle}>
            <span dangerouslySetInnerHTML={{ __html: post.title?.rendered }} />
          </h2>
          <p style={styles.featuredExcerpt}>{excerpt}{excerpt.length >= 200 ? "…" : ""}</p>
          <div style={styles.featuredMeta}>
            <span style={styles.metaChip}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              {formatDate(post.date)}
            </span>
            <span style={styles.metaChip}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              {readTime(post.content?.rendered)}
            </span>
          </div>
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...styles.featuredBtn, transform: hovered ? "scale(1.04)" : "scale(1)" }}
          >
            Read Full Article
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
        <div style={styles.featuredImageWrap}>
          {thumb ? (
            <img src={thumb} alt="" style={styles.featuredImage} />
          ) : (
            <div style={styles.featuredImagePlaceholder}>
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/>
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              <p style={{ color: "rgba(255,255,255,0.6)", marginTop: 12, fontFamily: "Georgia, serif" }}>Featured Article</p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

// ─── Pagination ──────────────────────────────────────────────────────────────
function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = [];
  const range = 2;
  for (let i = Math.max(1, currentPage - range); i <= Math.min(totalPages, currentPage + range); i++) {
    pages.push(i);
  }

  return (
    <div style={styles.pagination}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        style={{ ...styles.pageBtn, opacity: currentPage === 1 ? 0.4 : 1 }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
      </button>

      {currentPage > range + 1 && (
        <>
          <button onClick={() => onPageChange(1)} style={styles.pageBtn}>1</button>
          {currentPage > range + 2 && <span style={styles.pageDots}>…</span>}
        </>
      )}

      {pages.map(p => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          style={{ ...styles.pageBtn, ...(p === currentPage ? styles.pageBtnActive : {}) }}
        >
          {p}
        </button>
      ))}

      {currentPage < totalPages - range && (
        <>
          {currentPage < totalPages - range - 1 && <span style={styles.pageDots}>…</span>}
          <button onClick={() => onPageChange(totalPages)} style={styles.pageBtn}>{totalPages}</button>
        </>
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{ ...styles.pageBtn, opacity: currentPage === totalPages ? 0.4 : 1 }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
      </button>
    </div>
  );
}

// ─── Main App ────────────────────────────────────────────────────────────────
export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [catColors, setCatColors] = useState({});
  const [selectedCat, setSelectedCat] = useState(null); // null = All
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");

  // Fetch categories once
  useEffect(() => {
    fetch(`${API_BASE}/categories?per_page=20&hide_empty=true`)
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data)) {
          setCategories(data);
          const colorMap = {};
          data.forEach((cat, i) => { colorMap[cat.id] = getCategoryColor(i); });
          setCatColors(colorMap);
        }
      })
      .catch(() => {});
  }, []);

  // Fetch posts
  const fetchPosts = useCallback(async () => {
    setLoading(true);
    try {
      let url = `${API_BASE}/posts?per_page=${POSTS_PER_PAGE}&page=${page}&_embed`;
      if (selectedCat) url += `&categories=${selectedCat}`;
      if (search) url += `&search=${encodeURIComponent(search)}`;

      const res = await fetch(url);
      const total = parseInt(res.headers.get("X-WP-Total") || "0");
      const pages = parseInt(res.headers.get("X-WP-TotalPages") || "1");
      const data = await res.json();

      setTotalPosts(total);
      setTotalPages(pages);
      setPosts(Array.isArray(data) ? data : []);
    } catch (e) {
      setPosts([]);
    } finally {
      setLoading(false);
    }
  }, [page, selectedCat, search]);

  useEffect(() => { fetchPosts(); }, [fetchPosts]);

  // Reset page on filter change
  const handleCatChange = (catId) => {
    setSelectedCat(catId);
    setPage(1);
    setSearch("");
    setSearchInput("");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchInput);
    setPage(1);
    setSelectedCat(null);
  };

  const featuredPost = posts[0];
  const gridPosts = posts.slice(1);

  return (
    <div style={styles.page}>
      <Navbar />
      {/* ── Google Font ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; font-family: 'DM Sans', sans-serif; }
        @keyframes shimmer { 0%{background-position:-600px 0} 100%{background-position:600px 0} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
      `}</style>

      {/* ── Hero ── */}
      <header style={styles.hero}>
        <div style={styles.heroNoise} />
        <div style={styles.heroInner}>
          <p style={styles.heroEyebrow}>✦ Knowledge Hub</p>
          <h1 style={styles.heroTitle}>AI Chatbot Insights<br /><span style={styles.heroAccent}>& Expert Guides</span></h1>
          <p style={styles.heroSub}>Strategies, tutorials, and real stories to help you grow with AI.</p>

          {/* Search */}
          <form onSubmit={handleSearch} style={styles.searchForm}>
            <div style={styles.searchWrap}>
              <svg style={styles.searchIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                placeholder="Search articles…"
                style={styles.searchInput}
              />
              <button type="submit" style={styles.searchBtn}>Search</button>
            </div>
          </form>
        </div>
      </header>

      {/* ── Main ── */}
      <main style={styles.main}>

        {/* ── Category Filter ── */}
        <section style={styles.filterSection}>
          <div style={styles.filterScroll}>
            <button
              onClick={() => handleCatChange(null)}
              style={{ ...styles.filterBtn, ...(selectedCat === null ? styles.filterBtnActive : {}) }}
            >
              All Posts
              <span style={styles.filterCount}>{totalPosts || ""}</span>
            </button>
            {categories.map((cat, i) => {
              const color = getCategoryColor(i);
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCatChange(cat.id)}
                  style={{
                    ...styles.filterBtn,
                    ...(selectedCat === cat.id ? {
                      background: color.bg,
                      color: color.text,
                      borderColor: color.dot,
                    } : {}),
                  }}
                >
                  <span style={{ ...styles.catDot, background: color.dot, width: 7, height: 7 }} />
                  {cat.name}
                  <span style={styles.filterCount}>{cat.count}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* ── Active Filter / Search indicator ── */}
        {(search || selectedCat) && (
          <div style={styles.activeFilter}>
            <span>
              {search ? `Results for "${search}"` : `Category: ${categories.find(c => c.id === selectedCat)?.name}`}
              {totalPosts > 0 && ` — ${totalPosts} article${totalPosts !== 1 ? "s" : ""}`}
            </span>
            <button onClick={() => { setSearch(""); setSearchInput(""); setSelectedCat(null); setPage(1); }} style={styles.clearBtn}>
              ✕ Clear
            </button>
          </div>
        )}

        {/* ── Content ── */}
        {loading ? (
          <div style={styles.grid}>
            {Array.from({ length: POSTS_PER_PAGE }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : posts.length === 0 ? (
          <div style={styles.empty}>
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="1.5">
              <path d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <p style={{ color: "#6b7280", marginTop: 16, fontSize: 18 }}>No articles found.</p>
            <button onClick={() => { setSearch(""); setSearchInput(""); setSelectedCat(null); setPage(1); }} style={styles.searchBtn}>
              Reset Filters
            </button>
          </div>
        ) : (
          <>
            {/* Featured — only on page 1, no search/filter */}
            {page === 1 && !search && featuredPost && (
              <section style={{ marginBottom: 48, animation: "fadeUp 0.5s ease both" }}>
                <div style={styles.sectionLabel}>
                  <span style={styles.sectionLine} />
                  <span style={styles.sectionText}>Featured Article</span>
                  <span style={styles.sectionLine} />
                </div>
                <FeaturedPost post={featuredPost} />
              </section>
            )}

            {/* Grid */}
            {(page > 1 || search ? posts : gridPosts).length > 0 && (
              <section>
                {page === 1 && !search && (
                  <div style={{ ...styles.sectionLabel, marginBottom: 28 }}>
                    <span style={styles.sectionLine} />
                    <span style={styles.sectionText}>Latest Articles</span>
                    <span style={styles.sectionLine} />
                  </div>
                )}
                <div style={styles.grid}>
                  {(page === 1 && !search ? gridPosts : posts).map((post, i) => (
                    <div key={post.id} style={{ animation: `fadeUp 0.4s ease ${i * 0.06}s both` }}>
                      <PostCard post={post} catColors={catColors} />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </>
        )}

        {/* ── Pagination ── */}
        {!loading && posts.length > 0 && totalPages > 1 && (
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={(p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          />
        )}

        {/* ── Stats bar ── */}
        {!loading && totalPosts > 0 && (
          <p style={styles.statsText}>
            Showing {Math.min((page - 1) * POSTS_PER_PAGE + 1, totalPosts)}–{Math.min(page * POSTS_PER_PAGE, totalPosts)} of {totalPosts} articles
          </p>
        )}
      </main>
      <Footer />
    </div>
  );
}

// ─── Styles ──────────────────────────────────────────────────────────────────
const styles = {
  page: {
    minHeight: "100vh",
    background: "#fafafa",
    fontFamily: "'DM Sans', sans-serif",
    color: "#111827",
  },

  // Hero
  hero: {
    background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)",
    padding: "80px 24px 72px",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  },
  heroNoise: {
    position: "absolute", inset: 0,
    backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
    opacity: 0.4,
    pointerEvents: "none",
  },
  heroInner: { position: "relative", maxWidth: 680, margin: "0 auto" },
  heroEyebrow: {
    color: "#93c5fd", fontSize: 13, fontWeight: 600, letterSpacing: "0.15em",
    textTransform: "uppercase", marginBottom: 20,
  },
  heroTitle: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800,
    color: "#fff", lineHeight: 1.15, margin: "0 0 16px",
  },
  heroAccent: {
    background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
  },
  heroSub: { color: "#94a3b8", fontSize: 17, marginBottom: 36, lineHeight: 1.6 },

  // Search
  searchForm: { width: "100%" },
  searchWrap: {
    display: "flex", alignItems: "center",
    background: "#fff", borderRadius: 50,
    padding: "6px 8px 6px 20px",
    boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
    maxWidth: 520, margin: "0 auto",
  },
  searchIcon: { marginRight: 10, flexShrink: 0 },
  searchInput: {
    flex: 1, border: "none", outline: "none", fontSize: 15,
    fontFamily: "'DM Sans', sans-serif", background: "transparent",
  },
  searchBtn: {
    background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
    color: "#fff", border: "none", borderRadius: 40,
    padding: "10px 22px", fontSize: 14, fontWeight: 600,
    cursor: "pointer", flexShrink: 0,
  },

  // Main
  main: { maxWidth: 1200, margin: "0 auto", padding: "48px 24px 80px" },

  // Filter
  filterSection: { marginBottom: 36, overflowX: "auto" },
  filterScroll: { display: "flex", gap: 10, alignItems: "center", paddingBottom: 4, minWidth: "max-content" },
  filterBtn: {
    display: "flex", alignItems: "center", gap: 6,
    padding: "8px 18px", border: "1.5px solid #e5e7eb",
    borderRadius: 40, background: "#fff", cursor: "pointer",
    fontSize: 14, fontWeight: 500, color: "#374151",
    transition: "all 0.2s ease", whiteSpace: "nowrap",
    fontFamily: "'DM Sans', sans-serif",
  },
  filterBtnActive: {
    background: "#1e3a5f", color: "#fff", borderColor: "#1e3a5f",
  },
  filterCount: {
    background: "rgba(0,0,0,0.08)", borderRadius: 20,
    padding: "1px 7px", fontSize: 12,
  },

  // Active filter
  activeFilter: {
    display: "flex", alignItems: "center", gap: 12,
    background: "#eff6ff", border: "1px solid #bfdbfe",
    borderRadius: 10, padding: "10px 16px", marginBottom: 28,
    fontSize: 14, color: "#1d4ed8",
  },
  clearBtn: {
    background: "none", border: "1px solid #93c5fd", color: "#2563eb",
    borderRadius: 6, padding: "3px 10px", cursor: "pointer", fontSize: 13,
    fontFamily: "'DM Sans', sans-serif",
  },

  // Section label
  sectionLabel: {
    display: "flex", alignItems: "center", gap: 16, marginBottom: 32,
  },
  sectionLine: { flex: 1, height: 1, background: "#e5e7eb" },
  sectionText: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 13, fontWeight: 600, color: "#9ca3af",
    letterSpacing: "0.12em", textTransform: "uppercase",
    whiteSpace: "nowrap",
  },

  // Featured card
  featuredCard: {
    background: "linear-gradient(135deg, #0f172a, #1e3a5f)",
    borderRadius: 24, overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  featuredGrid: {
    display: "grid", gridTemplateColumns: "1fr 1fr",
    gap: 0,
  },
  featuredContent: { padding: "48px 40px", display: "flex", flexDirection: "column", justifyContent: "center" },
  featuredTopRow: { display: "flex", gap: 10, alignItems: "center", marginBottom: 20 },
  featuredBadge: {
    background: "rgba(251,191,36,0.15)", color: "#fbbf24",
    border: "1px solid rgba(251,191,36,0.3)",
    borderRadius: 20, padding: "4px 14px", fontSize: 12, fontWeight: 600,
  },
  featuredCat: {
    background: "rgba(96,165,250,0.15)", color: "#93c5fd",
    borderRadius: 20, padding: "4px 14px", fontSize: 12, fontWeight: 600,
  },
  featuredTitle: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700,
    color: "#fff", lineHeight: 1.3, margin: "0 0 16px",
  },
  featuredExcerpt: { color: "#94a3b8", fontSize: 15, lineHeight: 1.7, margin: "0 0 24px" },
  featuredMeta: { display: "flex", gap: 20, marginBottom: 28 },
  metaChip: {
    display: "flex", alignItems: "center", gap: 5,
    color: "#64748b", fontSize: 13,
  },
  featuredBtn: {
    display: "inline-flex", alignItems: "center", gap: 8,
    background: "linear-gradient(135deg, #2563eb, #7c3aed)",
    color: "#fff", borderRadius: 10, padding: "13px 26px",
    fontSize: 14, fontWeight: 600, textDecoration: "none",
    transition: "transform 0.2s ease", width: "fit-content",
  },
  featuredImageWrap: {
    minHeight: 320, overflow: "hidden",
    borderLeft: "1px solid rgba(255,255,255,0.06)",
  },
  featuredImage: { width: "100%", height: "100%", objectFit: "cover" },
  featuredImagePlaceholder: {
    width: "100%", height: "100%", minHeight: 320,
    background: "linear-gradient(135deg, #1e3a5f, #312e81)",
    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
  },

  // Grid
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gap: 24,
  },

  // Post card
  card: {
    background: "#fff", borderRadius: 16,
    overflow: "hidden", display: "flex", flexDirection: "column",
    cursor: "pointer",
  },
  cardThumb: { position: "relative", height: 200, overflow: "hidden", flexShrink: 0 },
  thumbImg: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
  thumbPlaceholder: {
    width: "100%", height: "100%",
    display: "flex", alignItems: "center", justifyContent: "center",
  },
  catBadge: {
    position: "absolute", bottom: 12, left: 12,
    display: "flex", alignItems: "center", gap: 5,
    borderRadius: 20, padding: "4px 12px", fontSize: 12, fontWeight: 600,
    backdropFilter: "blur(4px)",
  },
  catDot: { width: 6, height: 6, borderRadius: "50%", flexShrink: 0, display: "inline-block" },
  cardBody: { padding: "20px 20px 22px", display: "flex", flexDirection: "column", flex: 1 },
  cardTitle: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 18, fontWeight: 700, lineHeight: 1.4,
    margin: "0 0 10px", transition: "color 0.2s",
  },
  cardExcerpt: { color: "#6b7280", fontSize: 14, lineHeight: 1.65, margin: "0 0 16px", flex: 1 },
  cardMeta: { display: "flex", gap: 16, marginBottom: 16 },
  metaItem: { display: "flex", alignItems: "center", gap: 4, fontSize: 13, color: "#9ca3af" },
  readBtn: {
    display: "inline-flex", alignItems: "center", gap: 7,
    padding: "9px 18px", borderRadius: 8, fontSize: 13, fontWeight: 600,
    textDecoration: "none", transition: "all 0.2s ease",
    border: "none", cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
    width: "fit-content",
  },

  // Skeleton
  skeleton: {
    background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
    backgroundSize: "600px 100%",
    animation: "shimmer 1.4s infinite linear",
    borderRadius: 6,
  },

  // Empty
  empty: {
    textAlign: "center", padding: "80px 24px",
    display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
  },

  // Pagination
  pagination: {
    display: "flex", justifyContent: "center", alignItems: "center",
    gap: 6, marginTop: 52, flexWrap: "wrap",
  },
  pageBtn: {
    display: "flex", alignItems: "center", justifyContent: "center",
    minWidth: 40, height: 40, border: "1.5px solid #e5e7eb",
    borderRadius: 10, background: "#fff", cursor: "pointer",
    fontSize: 14, fontWeight: 500, color: "#374151",
    transition: "all 0.2s ease", fontFamily: "'DM Sans', sans-serif",
  },
  pageBtnActive: {
    background: "linear-gradient(135deg, #1e3a5f, #2563eb)",
    color: "#fff", borderColor: "transparent",
    boxShadow: "0 4px 12px rgba(37,99,235,0.3)",
  },
  pageDots: { color: "#9ca3af", padding: "0 4px" },

  // Stats
  statsText: {
    textAlign: "center", marginTop: 24,
    color: "#9ca3af", fontSize: 13,
  },
};