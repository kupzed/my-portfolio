import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/kupzed", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/riza-fahdan-syahda",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:rizafahdansyahda3@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-12 text-center">
        {/* Logo */}
        <p className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Kupzed<span className="text-accent">.</span>
        </p>

        {/* Tagline */}
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-gray-500 dark:text-white/60">
          A Full-stack Developer building robust and scalable web applications.
        </p>

        {/* Social Icons */}
        <div className="mt-6 flex items-center justify-center gap-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-gray-400 transition-all duration-300 hover:scale-110 hover:text-gray-900 dark:text-white/40 dark:hover:text-white"
            >
              <s.icon size={20} strokeWidth={1.5} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="mt-8 text-xs text-gray-400/80 dark:text-white/30">
          © 2026 Riza. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
