"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Mynavlink = ({ href, children }) => {
     const pathname = usePathname();
    return (
  <Link
      href={href}
      className={`flex items-center rounded-xl p-2 px-2 font-semibold  hover:text-purple-500 ${
        pathname === href ? "bg-emerald-800 text-white" : ""
      }`}
    >
      {children}
    </Link>
    );
};

export default Mynavlink;