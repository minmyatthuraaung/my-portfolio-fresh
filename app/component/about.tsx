import { BookOpenCheck, Code2, Puzzle, UserRound } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto grid max-w-7xl gap-10 px-2 py-8 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]"
    >
      <div className="pointer-events-none absolute -left-24 top-1/4 -z-10 h-72 w-72 rounded-full bg-violet-600/10 blur-[110px]" />
      <div className="relative max-w-xl">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-8 bg-linear-to-r from-fuchsia-400 to-violet-400" />
          <h1 className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-300 sm:text-sm">
            ABOUT ME
          </h1>
        </div>
        <h2 className="font-heading text-3xl font-semibold leading-[1.15] tracking-[-0.045em] text-white sm:text-4xl lg:text-[2.7rem]">
          Building digital products with{" "}
          <span className="bg-linear-to-r from-pink-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
            passion
          </span>{" "}
          and{" "}
          <span className="bg-linear-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            purpose
          </span>
        </h2>
        <div className="mt-7 space-y-5 border-l border-white/10 pl-5 text-[0.9375rem] leading-7 text-slate-300/80 sm:pl-6 sm:text-base sm:leading-8">
          <p className="relative">
            <span className="absolute left-[-1.6rem] top-2 h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.7)] sm:left-[-1.85rem]" />
            I&apos;m an IT student and aspiring full-stack developer who enjoys
            turning ideas into real, useful products. I like building clean,
            user-friendly web applications and learning how frontend, backend,
            and databases work together.
          </p>
          <p className="relative text-slate-400">
            <span className="absolute left-[-1.6rem] top-2 h-2 w-2 rounded-full border border-sky-300/70 bg-[#08090d] shadow-[0_0_10px_rgba(125,211,252,0.35)] sm:left-[-1.85rem]" />
            I&apos;m constantly learning, experimenting, and improving my
            development skills. My goal is to join a professional team as an
            intern or junior developer, contribute to real-world projects, and
            grow alongside experienced developers.
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <article className="group min-h-48 rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/25 hover:bg-violet-400/5 hover:shadow-[0_16px_40px_rgba(139,92,246,0.08)]">
          <Code2
            aria-hidden="true"
            className="mb-5 h-7 w-7 text-violet-300 transition-transform duration-300 group-hover:scale-110"
          />
          <h2 className="text-base font-semibold text-white sm:text-lg">
            Clean &amp; Maintainable
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            I focus on writing clear, organized code that&apos;s easy to
            understand and improve.
          </p>
        </article>
        <article className="group min-h-48 rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300/25 hover:bg-sky-400/5 hover:shadow-[0_16px_40px_rgba(56,189,248,0.08)]">
          <UserRound
            aria-hidden="true"
            className="mb-5 h-7 w-7 text-sky-300 transition-transform duration-300 group-hover:scale-110"
          />
          <h2 className="text-base font-semibold text-white sm:text-lg">
            User Focused
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            I enjoy creating simple, intuitive interfaces with the user
            experience in mind.
          </p>
        </article>
        <article className="group min-h-48 rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/25 hover:bg-blue-400/5 hover:shadow-[0_16px_40px_rgba(96,165,250,0.08)]">
          <BookOpenCheck
            aria-hidden="true"
            className="mb-5 h-7 w-7 text-blue-300 transition-transform duration-300 group-hover:scale-110"
          />
          <h2 className="text-base font-semibold text-white sm:text-lg">
            Continuous Learning
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            I&apos;m constantly learning new technologies and improving my
            development skills through projects.
          </p>
        </article>
        <article className="group min-h-48 rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-fuchsia-300/25 hover:bg-fuchsia-400/5 hover:shadow-[0_16px_40px_rgba(217,70,239,0.08)]">
          <Puzzle
            aria-hidden="true"
            className="mb-5 h-7 w-7 text-fuchsia-300 transition-transform duration-300 group-hover:scale-110"
          />
          <h2 className="text-base font-semibold text-white sm:text-lg">
            Problem Solver
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            I enjoy breaking down problems and turning ideas into practical
            solutions with code.
          </p>
        </article>
      </div>
    </section>
  );
}
