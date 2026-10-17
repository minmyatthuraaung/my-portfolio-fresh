import Link from "next/link";
import SocialLinks from "./socialLink";

export default function Footer() {
  return (
    <footer className="mx-auto mt-6 max-w-7xl px-2 pb-6 sm:px-6 lg:px-12">
      <div className="border-t border-white/10 pt-6 sm:pt-7">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-center sm:text-left">
            <Link
              href="#home"
              className="bg-linear-to-r from-violet-300 to-blue-300 bg-clip-text text-sm font-semibold tracking-tight text-transparent transition-opacity hover:opacity-80"
            >
              Min Myat Thura Aung
            </Link>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
              Full-stack Developer
            </p>
          </div>
          <SocialLinks className="gap-3" iconOnly />
        </div>
        <div className="mt-5 border-t border-white/8 pt-4 text-center">
          <p className="text-[11px] text-slate-500">
            © 2026 Min Myat Thura Aung
          </p>
          <p className="text-[9px] text-slate-500">Built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
