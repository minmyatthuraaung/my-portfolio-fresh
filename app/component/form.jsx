"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AtSign, MessageSquare, Send, UserRound } from "lucide-react";

export default function ContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  async function handleSubmit(event) {
    event.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey || !formRef.current) {
      const message =
        "The contact form is not configured yet. Please try again later.";
      console.error(message);
      setStatus({ type: "error", message });
      return;
    }

    setStatus({ type: "sending", message: "" });

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      });
      formRef.current.reset();
      setStatus({
        type: "success",
        message: "Message sent successfully. Thanks for reaching out!",
      });
    } catch (error) {
      console.error("Failed to send contact form with EmailJS:", error);
      setStatus({
        type: "error",
        message: "Your message could not be sent. Please try again shortly.",
      });
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="mx-auto max-w-2xl rounded-3xl border border-slate-700/60 bg-[#0d1016]/90 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="contact-name"
            className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-300"
          >
            <UserRound
              aria-hidden="true"
              className="h-3.5 w-3.5 text-sky-400"
            />
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="John Doe"
            className="h-11 w-full rounded-xl border border-slate-700/70 bg-[#171b23] px-3.5 text-sm text-white outline-none transition placeholder:text-slate-500 hover:border-slate-600 focus:border-sky-400/60 focus:ring-2 focus:ring-sky-400/10"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="contact-email"
            className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-300"
          >
            <AtSign
              aria-hidden="true"
              className="h-3.5 w-3.5 text-emerald-400"
            />
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="hello@example.com"
            className="h-11 w-full rounded-xl border border-slate-700/70 bg-[#171b23] px-3.5 text-sm text-white outline-none transition placeholder:text-slate-500 hover:border-slate-600 focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-400/10"
          />
        </div>

        <div className="space-y-2 sm:col-span-2">
          <label
            htmlFor="contact-subject"
            className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-300"
          >
            <MessageSquare
              aria-hidden="true"
              className="h-3.5 w-3.5 text-amber-400"
            />
            Subject
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            required
            placeholder="Project Inquiry"
            className="h-11 w-full rounded-xl border border-slate-700/70 bg-[#171b23] px-3.5 text-sm text-white outline-none transition placeholder:text-slate-500 hover:border-slate-600 focus:border-amber-400/60 focus:ring-2 focus:ring-amber-400/10"
          />
        </div>

        <div className="space-y-2 sm:col-span-2">
          <label
            htmlFor="contact-message"
            className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-300"
          >
            <span aria-hidden="true" className="font-mono text-violet-400">
              &gt;_
            </span>
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            placeholder="Tell me about your project..."
            className="w-full resize-y rounded-xl border border-slate-700/70 bg-[#171b23] px-3.5 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-slate-500 hover:border-slate-600 focus:border-violet-400/60 focus:ring-2 focus:ring-violet-400/10"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status.type === "sending"}
        className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-[#090a0d] shadow-[0_6px_24px_rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-200 hover:shadow-[0_10px_30px_rgba(255,255,255,0.12)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300 active:translate-y-0 active:scale-[0.99] disabled:pointer-events-none disabled:opacity-60"
      >
        <Send aria-hidden="true" className="h-4 w-4" />
        {status.type === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status.message && (
        <p
          role={status.type === "error" ? "alert" : "status"}
          className={`mt-4 text-center text-sm ${
            status.type === "error" ? "text-rose-300" : "text-emerald-300"
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
