import Link from "next/link";
import React from "react";

const links = [
  { id: 1, name: "Book a Demo", href: "#" },
  { id: 2, name: "Enquiry for Partnership", href: "#" },
  { id: 3, name: "Helpdesk Support", href: "#" },
  { id: 4, name: "Project Team Support", href: "#" },
];

export default function NavigationBanner() {
  return (
    <div className="mx-auto my-5 w-fit text-2xl font-bold leading-8 tracking-normal">
      {links.map((lnk) => (
        <Link
          key={lnk.id}
          href={lnk.href}
          className="mx-10 inline-block hover:text-main hover:underline"
        >
          {lnk.name}
        </Link>
      ))}
    </div>
  );
}
