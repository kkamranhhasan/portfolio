import type { Metadata } from "next";
import { Inter, Sora, Pacifico } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora"
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico"
});

export const metadata: Metadata = {
  title: "Kamran Hasan – AI Engineer & Data Scientist",
  description:
    "Professional portfolio of Kamran Hasan. AI Engineer & Data Scientist focusing on intelligent, dynamic digital experiences.",
  openGraph: {
    title: "Kamran Hasan – AI Engineer & Data Scientist",
    description:
      "Professional portfolio of Kamran Hasan. AI Engineer & Data Scientist.",
    url: "https://kamranhasan.com",
    siteName: "Kamran Hasan",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${sora.variable} ${pacifico.variable} font-sans bg-slate-900 text-slate-200 antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

