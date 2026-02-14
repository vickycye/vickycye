import type { Metadata } from "next";
import { ValentineAnimation } from "@/components/ValentineAnimation";

export const metadata: Metadata = {
  title: "2-14 | Vicky Ye",
  description: "A little something for Valentine's Day",
};

export default function ValentinePage() {
  return <ValentineAnimation />;
}
