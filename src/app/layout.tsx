import type { Metadata, Viewport } from "next";
import { Source_Sans_3 } from "next/font/google";
import { AppFooter } from "@/components/layout/AppFooter";
import { AppHeader } from "@/components/layout/AppHeader";
import { ProgressProvider } from "@/components/providers/ProgressProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { APP_NAME } from "@/lib/constants";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: `%s · ${APP_NAME}`,
  },
  description:
    "Study for the California Class C driver’s knowledge test with practice exams, topic quizzes, and progress tracking. Independent study tool — not the official DMV test.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0b3d91" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1220" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sourceSans.variable} h-full`} suppressHydrationWarning>
      <body className="flex min-h-full flex-col antialiased">
        <ThemeProvider>
          <ProgressProvider>
            <AppHeader />
            <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-5 sm:py-8">
              {children}
            </main>
            <AppFooter />
          </ProgressProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
