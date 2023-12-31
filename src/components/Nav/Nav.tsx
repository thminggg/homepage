import { useState, ButtonHTMLAttributes } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import links from "../../data/links.json";
import { handleLinkClick } from "../../helpers/scrollTrack";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import "./Nav.css";

const navId = "nav";

const DarkButton = ({
  dark,
  setDark,
  ...props
}: {
  dark: boolean;
  setDark: (dark: boolean) => void;
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      onClick={() => setDark(!dark)}
      title={`Toggle ${dark ? "light" : "dark"} mode`}
      className={`dark-button ${dark ? "dark" : ""}`}
    >
      {!dark && <MdLightMode className="icon text-amber-500 h-6" />}
      {dark && <MdDarkMode className="icon text-dark h-6" />}
    </button>
  );
};

const Drawer = ({
  openMenu,
  setOpenMenu,
}: {
  openMenu: boolean;
  setOpenMenu: (val: boolean) => void;
}) => {
  return (
    <div className="w-full relative md:hidden">
      <div className="absolute top-3 right-0 w-full bg-white dark:bg-dark">
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

export default function Nav({
  dark,
  setDark,
}: {
  dark: boolean;
  setDark: (val: boolean) => void;
}) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div
      id={navId}
      className="flex flex-wrap pl-6 pr-6 lg:pl-0 lg:pr-0 lg:ml-auto lg:mr-auto w-full max-w-screen-lg justify-between items-center sticky top-0 pt-7 pb-5 bg-white dark:bg-dark z-10"
    >
      <a href="/homepage" className="name ml-2">
        Patrick
      </a>
      <div className="flex flex-wrap gap-10 justify-between items-center">
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
        <DarkButton
          dark={dark}
          className="hidden md:inline-block"
          setDark={setDark}
        />
        <button onClick={() => setOpenMenu(!openMenu)}>
          <GiHamburgerMenu className="h-6 w-6 block md:hidden" />
        </button>
      </div>
      <Drawer openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </div>
  );
}
