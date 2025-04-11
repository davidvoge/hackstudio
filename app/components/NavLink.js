"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <button
        className={`p-2 w-full flex animate-all duration-300 rounded-md text-white justify-start hover:bg-base-100 ${
          isActive ? "bg-base-100 hover:bg-base-200 hover:text-primary" : ""
        }`}
      >
        {children}
      </button>
    </Link>
  );
}
