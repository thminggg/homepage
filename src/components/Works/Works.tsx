import type { CustomFlowbiteTheme } from "flowbite-react";
import { Carousel } from "flowbite-react";
import { ReactNode, useMemo } from "react";
import { BiLogoReact } from "react-icons/bi";
import "./Works.css";

const customTheme: CustomFlowbiteTheme["carousel"] = {
  control: {
    icon: "text-gray-800 dark:text-white sm:h-6 sm:w-6",
  },
};

const Projects = ({
  projects,
}: {
  projects: Array<{
    title: ReactNode;
    href: string;
    img: string;
  }>;
}) => {
  return (
    <div className="h-56 sm:h-64 xl:h-80">
      <Carousel
        theme={customTheme}
        slide={false}
        pauseOnHover
        indicators={false}
      >
        {projects.map(({ title, href, img }, index) => (
          <div
            key={index}
            className="flex flex-col h-full items-center justify-center"
          >
            <p className="text-center font-semibold md:text-lg lg:text-xl">
              {title}
            </p>
            <a href={href} target="__blank" className="w-full">
              <img
                src={img}
                alt="sportsync"
                className="max-h-44 w-auto mx-auto"
              />
            </a>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default function Works({ id, dark }: { id: string; dark: boolean }) {
  const projects = useMemo(
    () => [
      {
        title: (
          <>
            Commercial Banking <span className="theme"> WhatsApp AI </span>
            Chatbot
          </>
        ),
        href: "https://www.hangseng.com/en-hk/business/banking-digitally/online-services-beri/",
        img: !dark ? "hs.svg" : "hs-white.svg",
      },
      {
        title: (
          <>
            Athlete Scouting
            <span className="theme">
              <BiLogoReact /> React{" "}
            </span>
            Web App
          </>
        ),
        href: "https://www.sportsync.com/",
        img: "sportsync.svg",
      },
      {
        title: (
          <>
            Finance
            <span className="theme">
              <BiLogoReact /> React{" "}
            </span>
            Web App
          </>
        ),
        href: "https://www.ufinancehk.co/",
        img: "uf.svg",
      },
    ],
    [dark]
  );

  return (
    <section
      id={id}
      className="flex flex-wrap items-center pt-20"
      style={{ paddingTop: "80px" }}
    >
      <h1 className="w-full text-center text-3xl section-highlight">Works</h1>
      <div className="hidden w-full md:block md:w-6/12">
        <img
          src="projects.svg"
          className="w-auto h-auto mx-auto pr-6"
          alt="it-abstract"
        />
      </div>
      <div className="w-full flex flex-col mt-3 mb-3 md:w-6/12">
        <h2 className="text-center text-xl title">Production Projects</h2>
        <Projects projects={projects} />
      </div>
    </section>
  );
}
