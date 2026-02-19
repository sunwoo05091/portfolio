import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "김선우 | Frontend Developer",
  description: "Flutter Mobile + Frontend Developer Portfolio",
  keywords: ["Frontend", "Developer", "Flutter", "React", "TypeScript", "Portfolio"],
  authors: [{ name: "김선우" }],
  openGraph: {
    title: "김선우 | Frontend Developer",
    description: "Flutter Mobile + Frontend Developer Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${jetbrainsMono.variable} antialiased`} data-basepath={basePath}>
        {children}
      </body>
    </html>
  );
}
