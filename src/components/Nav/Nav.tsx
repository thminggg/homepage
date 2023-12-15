import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Separator from "../Separator/Separator";
import "./Nav.css";

const navId = "nav";
const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

const handleLinkClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  id: string,
  setActive: (val: number) => void,
  index: number
) => {
  e.preventDefault();
  // Set Link Style
  setActive(index);

  // Scroll to Top
  if (id === "#home") {
    return window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  // Section Specific Scroll
  const section = document.querySelector(id);
  section?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Drawer = ({
  openMenu,
  setActive,
}: {
  openMenu: boolean;
  setActive: (val: number) => void;
}) => {
  return (
    <div className="w-full relative xl:hidden">
      <div className="absolute top-3 right-0 w-full bg-white pb-5">
        <div className="flex flex-col gap-1 flex-wrap justify-end">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`link hidden ml-auto responsive-menu xl:inline-block ${
                openMenu && "open"
              }`}
              onClick={(e) => {
                handleLinkClick(e, link.href, setActive, index);
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Nav() {
  const [active, setActive] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div
      id={navId}
      className="flex flex-wrap w-full sticky top-0 pt-7 bg-white"
    >
      <a href="/" className="name ml-2">
        Patrick
      </a>
      <div className="flex flex-wrap gap-8 justify-end ml-auto">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className={`link hidden xl:inline-block ${
              active === index ? "active" : ""
            }`}
            onClick={(e) => {
              handleLinkClick(e, link.href, setActive, index);
            }}
          >
            {link.name}
          </a>
        ))}
        <button onClick={() => setOpenMenu(!openMenu)}>
          <GiHamburgerMenu className="h-6 w-6 block xl:hidden" />
        </button>
      </div>
      <Drawer openMenu={openMenu} setActive={setActive} />
      <div className="w-full mt-6">
        <Separator />
      </div>
    </div>
  );
}
