import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PonyApp",
  description: "Una App de banco",
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
