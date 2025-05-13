import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { ThemeProvider } from "../providers/theme-provider";
import "./globals.css";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pluraminati",
  description: "All in one Agency Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
