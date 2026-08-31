import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/common/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kupzed.vercel.app"),
  title: {
    default: "Riza Fahdan Syahda | Fullstack Developer",
    template: "%s | Riza Fahdan Syahda",
  },
  description:
    "Recruiter-ready portfolio of Riza Fahdan Syahda, a Fullstack Developer from Bogor, Indonesia building web apps with Next.js, React, SvelteKit, Laravel, Supabase, and PostgreSQL.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Riza Fahdan Syahda | Fullstack Developer",
    description:
      "Fullstack portfolio featuring production-minded web apps, backend APIs, databases, auth, deployment, and responsive UI work.",
    url: "https://kupzed.vercel.app",
    siteName: "Kupzed Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Riza Fahdan Syahda | Fullstack Developer",
    description:
      "Fullstack developer portfolio with Next.js, React, Laravel, Supabase, PostgreSQL, and deployment-ready project work.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} bg-foreground text-background dark:bg-background dark:text-foreground antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
