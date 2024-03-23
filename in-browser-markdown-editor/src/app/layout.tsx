import type { Metadata } from "next";
import clsx from "clsx";

import { roboto, roboto_slab } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frontend Mentor | In-browser markdown editor",
  description: "Frontend Mentor in-browser markdown editor challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(roboto.variable, roboto_slab.variable)}>
      <body>{children}</body>
    </html>
  );
}
