import { Mail } from "lucide-react";
import ContactForm from "./form";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-7xl scroll-mt-28 px-2 sm:px-6 sm:py-6 lg:px-12 lg:py-10"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="mx-auto mb-9 max-w-2xl text-center sm:mb-10">
        <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-violet-300 sm:text-sm">
          <span className="h-px w-7 bg-linear-to-r from-pink-400 to-violet-400" />
          Let&apos;s talk
          <span className="h-px w-7 bg-linear-to-l from-pink-400 to-violet-400" />
        </span>
        <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
          Reach out and let{"'"}s bring your vision to life. Share your unique
          project, or ask about our services. Your journey starts now!
        </p>
      </div>
      <ContactForm />

      <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500">
        <Mail aria-hidden="true" className="h-3.5 w-3.5" />
        Usually reply within a couple of days
      </div>
    </section>
  );
}
