import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import links from "../../data/links.json";
import { handleLinkClick } from "../../helpers/scrollTrack";
import "./Nav.css";

const navId = "nav";
const Drawer = ({
  openMenu,
  setOpenMenu,
}: {
  openMenu: boolean;
  setOpenMenu: (val: boolean) => void;
}) => {
  return (
    <div className="w-full relative md:hidden">
      <div className="absolute top-3 right-0 w-full bg-white">
        <div className="flex flex-col gap-1 flex-wrap justify-end">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`nav-link hidden ml-auto responsive-menu xl:inline-block ${
                openMenu && "open"
              }`}
              onClick={(e) => {
                handleLinkClick(e, link.href);
                setOpenMenu(!openMenu);
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
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div
      id={navId}
      className="flex flex-wrap pl-6 pr-6 lg:pl-0 lg:pr-0 lg:ml-auto lg:mr-auto w-full max-w-screen-lg justify-between items-center sticky top-0 pt-7 pb-5 bg-white z-10"
    >
      <a href="/" className="name ml-2">
        Patrick
      </a>
      <div className="flex flex-wrap gap-10 justify-between">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className={`nav-link hidden md:inline-block ${
              index === 0 && "active"
            }`}
            onClick={(e) => {
              handleLinkClick(e, link.href);
            }}
          >
            {link.name}
          </a>
        ))}
        <button onClick={() => setOpenMenu(!openMenu)}>
          <GiHamburgerMenu className="h-6 w-6 block md:hidden" />
        </button>
      </div>
      <Drawer openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </div>
  );
}
