import Link from "next/link";
import React from "react";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>About Navbar</nav>
      <main>
        {children}
        <Link href={"/"}>Home Page</Link>
      </main>
    </>
  );
}
