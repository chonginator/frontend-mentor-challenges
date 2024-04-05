import { cookies } from "next/headers";
import type { Metadata } from "next";
import { cn } from "@/utils";
import DarkLightToggle from "@/components/DarkLightToggle";

import { roboto, roboto_slab, roboto_mono } from "./fonts";
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
  const savedTheme = cookies().get("colour-theme");
  let initialTheme: "light" | "dark" = "light";

  if (savedTheme?.value === "dark") {
    initialTheme = "dark";
  }

  return (
    <html
      lang="en"
      className={cn(roboto.variable, roboto_slab.variable, roboto_mono)}
    >
      <body>
        {children}
        <DarkLightToggle initialTheme={initialTheme} />
      </body>
    </html>
  );
}
