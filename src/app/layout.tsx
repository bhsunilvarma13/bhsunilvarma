import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import ProfilePic from "./components/ProfilePic";
import Link from "next/link";
import { FaYoutube, FaTwitter, FaGithub } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "bhsunilvarma",
  description: "This is Sunil Varma's page.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body
        className={`${inter.className} no-scrollbar`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        <ProfilePic />
        <div className="flex gap-4 text-xl justify-center">
          <Link href="https://twitter.com/iaminaL00P">
            <FaTwitter />
          </Link>
          <Link href="https://www.youtube.com/channel/UCB4SC2YogcLtKj0yRjdXzCg">
            <FaYoutube />
          </Link>
          <Link href="https://github.com/bhsunilvarma13">
            <FaGithub />
          </Link>
        </div>
        <h1 className="w-full text-center mt-4 text-2xl">
          Hey, I&apos;m Sunil 👋
        </h1>
        {children}
      </body>
    </html>
  );
}
