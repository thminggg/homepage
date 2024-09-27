import { useMemo } from "react";
import "./Works.css";

interface WorksProps {
  id: string;
  dark: boolean;
  className?: string;
}

function Works({ id, dark, className }: WorksProps) {
  const projects = useMemo(
    () => [
      {
        title: <p className="overflow-hidden whitespace-nowrap">React App</p>,
        href: "https://shop.lululemon.com",
        img: !dark ? "lulu-logo.svg" : "lulu-logo-white.svg",
      },
      {
        title: <p className="overflow-hidden whitespace-nowrap">AI Chatbot</p>,
        href: "https://www.hangseng.com/en-hk/business/banking-digitally/online-services-beri/",
        img: !dark ? "hs-logo.svg" : "hs-logo-white.svg",
      },
      {
        title: (
          <p className="overflow-hidden whitespace-nowrap">
            AI & Microservices
          </p>
        ),
        href: "https://www.aia.com.hk/en/about-aia/about-us/media-centre/press-releases/2023/aia-press-release-20231026",
        img: "aia-logo.svg",
      },
      {
        title: <p className="overflow-hidden whitespace-nowrap">Automation </p>,
        href: "https://www.vaisala.com/en",
        img: !dark ? "v-logo.svg" : "v-logo-white.svg",
      },
      {
        title: (
          <p className="overflow-hidden whitespace-nowrap">Fullstack Web App</p>
        ),
        href: "https://www.ufinancehk.co/",
        img: "uf-logo.svg",
      },
      {
        title: (
          <p className="overflow-hidden whitespace-nowrap">Fullstack Web App</p>
        ),
        href: "https://www.sportsync.com/",
        img: "ss-logo.svg",
      },
    ],
    [dark]
  );

  return (
    <section
      id={id}
      className={`flex flex-col ${className}`}
      style={{ paddingTop: "80px" }}
    >
      <h1 className="w-full text-center text-3xl section-highlight">Works</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto mt-6">
        {projects.map(({ title, href, img }, index) => (
          <div
            key={index}
            className={`flex flex-col rounded-lg p-3 md:p-6 transform 
                                hover:scale-110 transition duration-500 ${
                                  !dark ? "bg-slate-100" : "bg-slate-600"
                                }`}
          >
            <span className="text-center font-semibold md:text-lg lg:text-xl">
              {title}
            </span>
            <a href={href} target="__blank" className="w-full">
              <img
                src={img}
                alt="logo"
                className="h-32 w-auto m-auto p-1 lg:p-6"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Works;
