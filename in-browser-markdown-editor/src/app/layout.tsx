import { cookies } from "next/headers";
import type { Metadata } from "next";
import { Provider as ToastProvider } from "@radix-ui/react-toast";

import MarkdownFilesProvider from "@/components/MarkdownFilesProvider";

import { cn } from "@/utils";
import { roboto, roboto_slab, roboto_mono } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frontend Mentor | In-browser markdown editor",
  description: "Frontend Mentor in-browser markdown editor challenge",
};

function RootLayout({
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
      className={cn(
        roboto.variable,
        roboto_slab.variable,
        roboto_mono.variable,
      )}
    >
      <body>
        <ToastProvider>
          <MarkdownFilesProvider>
            <main>{children}</main>
          </MarkdownFilesProvider>
        </ToastProvider>
      </body>
    </html>
  );
}

export default RootLayout;
