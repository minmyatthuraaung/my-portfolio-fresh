import { ArrowRight, Download, Database } from "lucide-react";
import Image from "next/image";
import SocialLinks from "./socialLink";
import profile from "../../public/profile.jpg";
export default function home() {
  return (
    <div>
      <section
        id="home"
        className="relative isolate mx-auto mt-8 grid min-h-[calc(100vh-112px)] max-w-7xl items-center gap-14 px-2 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-12 lg:py-12"
      >
        <div className="pointer-events-none absolute -left-40 top-1/4 -z-10 h-96 w-96 rounded-full bg-fuchsia-600/10 blur-[120px]" />
        <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="z-10 max-w-2xl">
          <span className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-violet-300 sm:text-sm">
            <span className="h-px w-8 bg-linear-to-r from-fuchsia-400 to-violet-400" />
            Hello, I&apos;m
          </span>
          <h1 className="font-heading text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-7xl lg:text-[5.5rem]">
            Full-stack
            <span className="mt-2 block bg-linear-to-r from-pink-400 via-fuchsia-400 to-blue-500 bg-clip-text text-transparent">
              Developer
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-slate-300/80 sm:text-lg sm:leading-8">
            I build modern, functional, and visually appealing web applications
            with clean code and great user experience.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(124,58,237,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_10px_35px_rgba(124,58,237,0.4)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300 active:translate-y-0 active:scale-[0.98]"
            >
              View Projects
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/3 px-6 text-sm font-medium text-slate-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.07] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300 active:translate-y-0 active:scale-[0.98]"
            >
              <Download aria-hidden="true" className="h-4 w-4" />
              Download Resume
            </a>
          </div>
          <div>
            <SocialLinks />
          </div>
        </div>
        <div className="relative mx-auto flex w-full max-w-97.5 items-center justify-center lg:ml-auto lg:mr-4">
          <div className="absolute -right-3 top-[17%] h-28 w-28 rounded-full border border-violet-300/15 bg-violet-400/6 shadow-[inset_0_0_35px_rgba(139,92,246,0.12)] backdrop-blur-sm sm:-right-8 sm:h-36 sm:w-36" />
          <div className="absolute -left-4 top-[35%] h-10 w-10 rounded-full border border-fuchsia-300/20 bg-fuchsia-400/10 shadow-[0_0_25px_rgba(217,70,239,0.25)] backdrop-blur-sm sm:-left-9 sm:h-12 sm:w-12" />
          <div className="relative aspect-4/5 w-full rounded-[28px] border border-white/15 bg-linear-to-br from-white/15 via-violet-400/10 to-white/5 p-2 shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
            <div className="relative h-full w-full overflow-hidden rounded-[21px] bg-slate-900">
              <Image
                src={profile}
                alt="Portrait of the developer"
                fill
                sizes="(max-width: 1024px) 80vw, 390px"
                className="object-cover object-[38%_center] grayscale-85 contrast-110 brightness-90"
                priority
              />

              <div className="absolute inset-0 bg-linear-to-t from-[#08090d]/50 via-transparent to-white/5" />
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-2 pb-16 sm:px-6 lg:px-12">
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          <li className="group flex min-h-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-center text-sm font-medium tracking-wide text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-cyan-400/[0.07] hover:text-cyan-100 hover:shadow-[0_12px_30px_rgba(34,211,238,0.08)]">
            <span className="flex items-center gap-2.5">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-6 w-6 shrink-0 text-cyan-300"
              >
                <circle cx="12" cy="12" r="1.8" fill="currentColor" />
                <g fill="none" stroke="currentColor" strokeWidth="1.25">
                  <ellipse cx="12" cy="12" rx="10" ry="3.8" />
                  <ellipse
                    cx="12"
                    cy="12"
                    rx="10"
                    ry="3.8"
                    transform="rotate(60 12 12)"
                  />
                  <ellipse
                    cx="12"
                    cy="12"
                    rx="10"
                    ry="3.8"
                    transform="rotate(120 12 12)"
                  />
                </g>
              </svg>
              <span>REACT</span>
            </span>
          </li>
          <li className="group flex min-h-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-center text-sm font-medium tracking-wide text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/25 hover:bg-blue-400/[0.07] hover:text-blue-100 hover:shadow-[0_12px_30px_rgba(96,165,250,0.08)]">
            <span className="flex items-center gap-2.5">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6 shrink-0 text-slate-100"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M8.5 16V8l7 8V8"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
              </svg>
              <span>NEXT.JS</span>
            </span>
          </li>
          <li className="group flex min-h-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-center text-sm font-medium tracking-wide text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/25 hover:bg-emerald-400/[0.07] hover:text-emerald-100 hover:shadow-[0_12px_30px_rgba(52,211,153,0.08)]">
            <span className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-emerald-400/70 text-[9px] font-bold text-emerald-300"
              >
                JS
              </span>
              <span>NODE.JS</span>
            </span>
          </li>
          <li className="group flex min-h-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-center text-sm font-medium tracking-wide text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/25 hover:bg-violet-400/[0.07] hover:text-violet-100 hover:shadow-[0_12px_30px_rgba(167,139,250,0.08)]">
            <span className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-violet-300/50 font-mono text-[10px] font-bold text-violet-200"
              >
                ex
              </span>
              <span>EXPRESS.JS</span>
            </span>
          </li>
          <li className="group flex min-h-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-center text-sm font-medium tracking-wide text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-300/25 hover:bg-green-400/[0.07] hover:text-green-100 hover:shadow-[0_12px_30px_rgba(74,222,128,0.08)]">
            <span className="flex items-center gap-2.5">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-6 w-6 shrink-0 text-green-400"
              >
                <path
                  fill="currentColor"
                  d="M12.2 2.2c-.7 1.5-1.2 2.3-2.4 3.6C7.6 8.1 6.6 10 6.6 12.5c0 3.4 2.2 6.2 5.4 7.1V22h1.3v-2.4c2.6-.9 4.3-3.3 4.3-6.2 0-3.4-2.1-6.7-5.4-11.2Zm-.2 15.9c-2-1-3.2-2.9-3.2-5.3 0-1.7.6-3.1 1.8-4.8-.4 2.8.1 5.3 1.4 7.1v3Z"
                />
              </svg>
              <span>MONGODB</span>
            </span>
          </li>
          <li className="group flex min-h-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-center text-sm font-medium tracking-wide text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300/25 hover:bg-sky-400/[0.07] hover:text-sky-100 hover:shadow-[0_12px_30px_rgba(56,189,248,0.08)]">
            <span className="flex items-center gap-2.5">
              <Database
                aria-hidden="true"
                className="h-5 w-5 shrink-0 text-sky-300"
              />
              <span>POSTGRESQL</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
