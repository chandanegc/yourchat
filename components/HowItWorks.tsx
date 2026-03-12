'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function HowItWorks() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            [0, 1, 2].forEach((index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => [...prev, index]);
              }, index * 300);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const steps = [
    {
      num: "1",
      title: "Add the Chatbot",
      desc: "Integrate the AI chatbot into your website or app with a simple script or SDK."
    },
    {
      num: "2",
      title: "Train with Your Data",
      desc: "Upload FAQs, help docs, or knowledge base to train the chatbot on your product."
    },
    {
      num: "3",
      title: "Support Customers 24/7",
      desc: "Instantly answer queries, escalate complex issues to agents, and track support performance."
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">

      <div className="max-w-7xl mx-auto space-y-20">

        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in-up">
          <div className="text-[10px] font-bold tracking-[0.3em] text-blue-600 uppercase">
            PROCESS
          </div>
          <h2 className="text-5xl font-black text-slate-900">
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">

          {/* Static Base Line */}
          <div className="hidden md:block absolute top-[2.25rem] left-[15%] right-[15%] h-[2px] bg-slate-200"></div>

          {/* Animated Line */}
          <div
            className="hidden md:block absolute top-[2.25rem] left-[15%] right-[15%] h-[2px] overflow-hidden"
          >
            <div
              className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-[1500ms] ease-out"
              style={{
                width:
                  visibleSteps.length === 0
                    ? "0%"
                    : visibleSteps.length === 1
                    ? "25%"
                    : visibleSteps.length === 2
                    ? "50%"
                    : "100%"
              }}
            />
          </div>

          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative text-center space-y-6 flex flex-col items-center group transition-all duration-700 ${
                visibleSteps.includes(i)
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Circle */}
              <div className="relative">
                <div
                  className={`absolute inset-0 rounded-full bg-blue-400 ${
                    visibleSteps.includes(i) ? "animate-ping" : "opacity-0"
                  }`}
                ></div>

                <div
                  className={`relative w-18 h-18 rounded-full border-4 ${
                    visibleSteps.includes(i)
                      ? "border-blue-500"
                      : "border-blue-100"
                  } bg-white flex items-center justify-center text-2xl font-bold text-blue-600 shadow-lg group-hover:scale-110 transition-all duration-500 z-10`}
                >
                  {step.num}
                </div>
              </div>

              <div className="space-y-3">
                <h4
                  className={`text-xl font-bold text-slate-900 transition-all duration-500 ${
                    visibleSteps.includes(i)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${i * 100 + 200}ms` }}
                >
                  {step.title}
                </h4>

                <p
                  className={`text-slate-500 text-sm leading-relaxed max-w-[280px] mx-auto font-medium transition-all duration-500 ${
                    visibleSteps.includes(i)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${i * 100 + 300}ms` }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}