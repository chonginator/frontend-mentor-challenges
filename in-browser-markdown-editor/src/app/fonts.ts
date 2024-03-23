import { Roboto, Roboto_Slab } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  display: "fallback",
  weight: ["300", "400"],
  variable: "--font-roboto",
});

export const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--font-roboto-slab",
});
