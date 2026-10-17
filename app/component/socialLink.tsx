const socialLinks = [
  {
    name: "GitHub",
    hover:
      "hover:border-violet-400/40 hover:bg-violet-500/15 hover:text-violet-200 hover:shadow-[0_0_22px_rgba(139,92,246,0.22)]",
    path: "M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.25.79-.56v-2.17c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.27-5.23-5.67 0-1.25.45-2.27 1.19-3.07-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.17a11 11 0 0 1 5.77 0c2.2-1.48 3.17-1.17 3.17-1.17.63 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.38-5.25 5.66.41.36.77 1.05.77 2.12v3.14c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z",
    url: "https://github.com/minmyatthuraaung",
  },
  {
    name: "LinkedIn",
    hover:
      "hover:border-sky-400/40 hover:bg-sky-500/15 hover:text-sky-300 hover:shadow-[0_0_22px_rgba(56,189,248,0.22)]",
    path: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 .02-4.12 2.06 2.06 0 0 1-.02 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z",
    url: "https://www.linkedin.com/in/min-myat-thura-aung",
  },
  {
    name: "Telegram",
    hover:
      "hover:border-cyan-400/40 hover:bg-cyan-500/15 hover:text-cyan-300 hover:shadow-[0_0_22px_rgba(34,211,238,0.22)]",
    path: "M23.91 4.79 20.3 21.82c-.27 1.2-.98 1.5-1.98.94l-5.48-4.04-2.64 2.54c-.29.29-.54.54-1.1.54l.39-5.58L19.65 7.9c.43-.39-.09-.61-.67-.22L6.82 15.35l-5.42-1.7c-1.18-.37-1.2-1.18.25-1.76L22.84 3.3c1.01-.37 1.9.25 1.57 1.49Z",
    url: "https://t.me/Yuta_Onne",
  },
  {
    name: "Facebook",
    hover:
      "hover:border-blue-400/40 hover:bg-blue-500/15 hover:text-blue-300 hover:shadow-[0_0_22px_rgba(96,165,250,0.22)]",
    path: "M13.5 21v-8.2h2.76l.41-3.2H13.5V7.56c0-.93.26-1.56 1.59-1.56h1.7V3.14C16.5 3.05 15.4 3 14.13 3c-2.65 0-4.46 1.62-4.46 4.6v2H6.9v3.2h2.77V21h3.83Z",
    url: "https://www.facebook.com/share/1BtqPLu3B9/",
  },
  {
    name: "X",
    hover:
      "hover:border-slate-300/40 hover:bg-white/10 hover:text-white hover:shadow-[0_0_22px_rgba(255,255,255,0.18)]",
    path: "M18.9 2H22l-6.78 7.75L23.2 22h-6.25l-4.9-7.63L5.38 22H2.25l7.25-8.29L1.8 2h6.4l4.43 6.96L18.9 2Zm-1.1 17.86h1.73L7.27 4.03H5.41L17.8 19.86Z",
    url: "https://x.com/yuta_onne",
  },
];
export default function SocialLinks({
  className = "mt-10",
  iconOnly = false,
}: {
  className?: string;
  iconOnly?: boolean;
}) {
  return (
    <nav
      aria-label="Social media"
      className={`${className} flex flex-wrap items-center ${iconOnly ? "gap-x-3" : "gap-x-5"} gap-y-3`}
    >
      {socialLinks.map(({ name, hover, path, url }) => {
        const linkClassName = `inline-flex ${iconOnly ? "h-9 w-9 py-2 px-2 justify-center rounded-lg border border-white/10 bg-white/[0.04]" : "items-center gap-2 rounded-lg px-2"} text-slate-300 transition-all duration-300 hover:-translate-y-0.5 ${hover} active:translate-y-0 active:scale-95`;
        const content = (
          <>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path d={path} />
            </svg>
            <span className={iconOnly ? "sr-only" : undefined}>{name}</span>
          </>
        );

        return url ? (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${name} profile (opens in a new tab)`}
            className={linkClassName}
          >
            {content}
          </a>
        ) : (
          <span
            key={name}
            title={`Add the ${name} profile URL in socialLink.tsx`}
            className={`${linkClassName} cursor-not-allowed opacity-50`}
          >
            {content}
          </span>
        );
      })}
    </nav>
  );
}
