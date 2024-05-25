import Comingsoon from "@/components/Comingsoon";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "We are CursedCarbon",
  description: "More Info Coming Soon!",
  // other metadata
};

export default function Home() {
  return (
    <main className="h-dvh bg-white">
      <Comingsoon />
    </main >
  );
}
