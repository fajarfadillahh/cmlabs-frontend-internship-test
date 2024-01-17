import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";

export default function Navbar() {
  const [stickyNavbar, setStickyNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 5 ? setStickyNavbar(true) : setStickyNavbar(false);
    });
  });

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 mx-auto max-w-[1440px] ${
        stickyNavbar ? "bg-white shadow-small" : "bg-transparent"
      }`}
    >
      <div className="container flex h-24 items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-1">
          <div className="text-3xl">🥗</div>
          <p className="text-[18px] font-black text-default-900">
            Madangan<span className="text-green-600">.</span>
          </p>
        </Link>

        <Button variant="bordered" color="default" className="font-semibold">
          Get Started
        </Button>
      </div>
    </nav>
  );
}
