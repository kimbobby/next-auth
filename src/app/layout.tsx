import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next auth",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div>
          <ul>
            <li>
              <Link href="/">home</Link>
            </li>
            <li>
              <Link href="/login">login</Link>
            </li>
            <li>
              <Link href="/register">register</Link>
            </li>
            <li>
              <Link href="/dashboard">dashboard</Link>
            </li>
          </ul>
        </div>
        {children}
      </body>
    </html>
  );
}
