import { useMemo } from "react";
import "./Works.css";
import WorkCard from "../WorkCard/WorkCard";

interface WorksProps {
  id: string;
  className?: string;
}

function Works({ id, className }: WorksProps) {
  const projects = useMemo(
    () => [
      {
        title: "lululemon",
        headline: "React Web App",
        description:
          "Customized A/B react components on the flagship Web App and Mobile App",
        bgColor: "#AB4355",
        href: "https://shop.lululemon.com",
        img: "lulu-logo-circle.svg",
      },
      {
        title: "Vaisala",
        headline: "Automation",
        description:
          "Test automation framework with multi-threading data workers",
        bgColor: "#4185AB",
        href: "https://www.vaisala.com/en",
        img: "v-circle.svg",
      },
      {
        title: "Hang Seng Bank",
        headline: "AI Chatbot",
        description:
          "AI-powered WhatsApp chatbot intergraing with commercial banking APIs",
        bgColor: "#41AB5F",
        href: "https://www.hangseng.com/en-hk/business/banking-digitally/online-services-beri/",
        img: "hs-logo-circle.svg",
      },
      {
        title: "uFinance",
        headline: "Fullstack Web App",
        description:
          "Fullstack Web App for a FinTech startup, transitioning from PHP to ReactJS with Redux",
        bgColor: "#4237AB",
        href: "https://www.ufinancehk.co/",
        img: "uf-logo-circle.svg",
      },
      {
        title: "AIA",
        headline: "AI Recommendation",
        description:
          "An award-winning AI Learning Recommendation Engine (ALRE) serving for insurance agents",
        bgColor: "#3595AB",
        href: "https://www.aia.com.hk/en/about-aia/about-us/media-centre/press-releases/2023/aia-press-release-20231026",
        img: "aia-logo-circle.svg",
      },
      {
        title: "Sportsync",
        headline: "Fullstack Web App",
        description:
          "Fullstack Web App for a sports tech startup, serving for sports clubs, coaches and atheletes around the world",
        bgColor: "#F47823",
        href: "https://www.sportsync.com/",
        img: "ss-logo-circle.svg",
      },
    ],
    []
  );

  return (
    <section
      id={id}
      className={`flex flex-col ${className}`}
      style={{ paddingTop: "80px" }}
    >
      <h1 className="w-full text-center text-3xl section-highlight">Works</h1>
      <div className="bg-slate-300 dark:bg-slate-700 p-6 rounded-lg mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto">
          {projects.map(
            ({ title, headline, description, href, img, bgColor }, index) => (
              <WorkCard
                key={index}
                title={title}
                headline={headline}
                description={description}
                href={href}
                img={img}
                bgColor={bgColor}
                onClick={() => {
                  window.open(href, "_blank");
                }}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Works;
