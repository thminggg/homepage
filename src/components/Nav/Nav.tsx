import { useState } from "react";
import "./Nav.css";
import Separator from "../Separator/Separator";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

export default function Nav() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-wrap w-full">
      <a href="/" className="name">
        Patrick
      </a>
      <div className="flex gap-8 justify-end ml-auto max-lg:hidden">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className={`link ${active === index ? "active" : ""}`}
            onClick={() => setActive(index)}
          >
            {link.name}
          </a>
        ))}
      </div>
      <div className="w-full mt-6">
        <Separator />
      </div>
    </div>
  );
}
