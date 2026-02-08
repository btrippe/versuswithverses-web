import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Versus with Verses",
  description: "Scripture memorization through repetition and friendly challenge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
