"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
const tabs = [
  { id: "home", href: "#home", label: "Home" },
  { id: "about", href: "#about", label: "About" },
  { id: "projects", href: "#projects", label: "Projects" },
  { id: "contact", href: "#contact", label: "Contact" },
];
export default function Navbar() {
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    const updateActiveTab = () => {
      const activationLine = window.innerHeight * 0.35;
      let currentTab = "home";

      for (const tab of tabs) {
        const section = document.getElementById(tab.id);
        if (section && section.getBoundingClientRect().top <= activationLine) {
          currentTab = tab.id;
        }
      }

      setActiveTab(currentTab);
    };

    updateActiveTab();
    window.addEventListener("scroll", updateActiveTab, { passive: true });
    window.addEventListener("resize", updateActiveTab);

    return () => {
      window.removeEventListener("scroll", updateActiveTab);
      window.removeEventListener("resize", updateActiveTab);
    };
  }, []);

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50 mx-auto max-w-7xl overflow-hidden rounded-[26px] border border-white/10 bg-[linear-gradient(90deg,#090d1a_0%,#111827_48%,#090d1a_100%)] shadow-[0_20px_60px_rgba(15,23,42,0.8)]">
        <header className="flex items-center justify-between gap-5 px-5 py-4 md:px-7">
          <div className="flex flex-col leading-none">
            <span className="font-heading text-gradient text-[1.65rem] font-bold tracking-[-0.065em] md:text-3xl">
              Min Myat Thura Aung
            </span>
            <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-300/80">
              Full-stack Developer
            </span>
          </div>

          <nav aria-label="Main navigation" className="hidden md:flex">
            <ul className="flex items-center gap-2 text-sm text-slate-200/85">
              {tabs.map((tab) => (
                <li key={tab.id}>
                  <Link
                    href={tab.href}
                    onClick={() => setActiveTab(tab.id)}
                    aria-current={activeTab === tab.id ? "location" : undefined}
                    className="group relative inline-flex rounded-full px-4 py-2 font-medium text-slate-200/85 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/5 hover:text-violet-200 hover:shadow-[0_0_20px_rgba(139,92,246,0.18)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300 active:translate-y-0 active:scale-95 active:text-cyan-200"
                  >
                    {tab.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-4 -bottom-px h-px rounded-full bg-linear-to-r from-pink-400 via-violet-400 to-blue-400 transition-opacity duration-300 ${
                        activeTab === tab.id
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-70"
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center">
            <Link
              href="#contact"
              className="inline-flex h-10 items-center gap-2 rounded-xl bg-gradient-primary px-4 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(124,58,237,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_10px_30px_rgba(124,58,237,0.38)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300 active:translate-y-0 active:scale-95 sm:h-11 sm:px-6"
            >
              Contact Me
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
}
