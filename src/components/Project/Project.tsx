import type { FlowbiteTabsTheme } from "flowbite-react";
import { Flowbite, Tabs } from "flowbite-react";
import { FaGithub } from "react-icons/fa";
import { HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { VscDebugAll } from "react-icons/vsc";
import { FlowbiteTabsOGTheme } from "../../assets/flowbite-og-theme";
import devs from "../../data/dev-projects.json";
import devStacks from "../../data/dev-stacks.json";
import repos from "../../data/repos.json";
import tests from "../../data/test-projects.json";
import Card from "../Card/Card";
import "./Project.css";
import Stacks from "./Stacks";

type Link = {
  url: string;
  title: string;
};

type Stack = {
  color: string;
  name: string;
};

type Collection = {
  links: Array<Link>;
  title: string;
  highlights: string;
  stacks?: Array<Stack>;
};

const customTheme: FlowbiteTabsTheme = {
  ...FlowbiteTabsOGTheme,
  base: "flex flex-col gap-2 w-full",
  tablist: {
    base: "flex text-center",
    styles: {
      ...FlowbiteTabsOGTheme.tablist.styles,
      default:
        "tablist flex-wrap border-b border-white-200 max-md:flex-nowrap overflow-x-auto",
    },
    tabitem: {
      ...FlowbiteTabsOGTheme.tablist.tabitem,
      base: "flex items-center justify-center whitespace-nowrap p-3 rounded-t-lg text-sm font-medium",
      styles: {
        ...FlowbiteTabsOGTheme.tablist.tabitem.styles,
        default: {
          base: "rounded-t-lg",
          active: {
            on: "text-white",
            off: "text-gray-500",
          },
        },
      },
    },
  },
};

const tabs = [
  {
    title: "Github",
    icon: FaGithub,
    headline: "Github",
    subtext: "Github repositories implemented to demonstrate my tech stacks",
    collection: repos as Array<Collection>,
  },
  {
    title: "Production",
    icon: MdDashboard,
    headline: "Production Projects",
    subtext: "Production projects implemented for companies",
    stacks: devStacks,
    collection: devs as Array<Collection>,
  },
  {
    title: "Testing",
    icon: VscDebugAll,
    headline: "Testing Projects",
    subtext: "Production projects tested for companies",
    collection: tests as Array<Collection>,
  },
];

export default function Project() {
  return (
    <div className="projects flex grow max-lg:w-full w-7/12 p-3 rounded-xl text-start">
      <Flowbite theme={{ theme: { tabs: customTheme } }}>
        <Tabs theme={customTheme}>
          {tabs.map(
            ({ title, icon, headline, subtext, stacks, collection }, index) => {
              return (
                <Tabs.Item active title={title} icon={icon} key={index}>
                  <div className="flex flex-wrap gap-3">
                    <div className="w-full text-3xl font-bold">{headline}</div>
                    <div className="w-full">{subtext}</div>
                    {/* Stacks */}
                    {stacks && (
                      <div className="mb-3 w-full">
                        <p className="mb-2">
                          In order not to disclose each project's techstacks,
                          simply listing everything below:
                        </p>
                        <div className="flex flex-wrap">
                          {Object.entries(stacks).map(
                            ([title, entries], stackIndex) => (
                              <Stacks
                                key={`${index}-${stackIndex}`}
                                stackIndex={stackIndex}
                                title={title}
                                entries={entries}
                              />
                            )
                          )}
                        </div>
                      </div>
                    )}
                    {/* Projects */}
                    {collection.map(
                      ({ links, title, highlights, stacks }, index) => (
                        <Card
                          key={index}
                          links={links}
                          title={title}
                          highlights={highlights}
                          stacks={stacks}
                        />
                      )
                    )}
                  </div>
                </Tabs.Item>
              );
            }
          )}
          <Tabs.Item title="About me" icon={HiUserCircle}>
            <p className="leading-loose">
              Patrick specializes in Cloud services, FinTech, and Innovation,
              utilizing ReactJS and NodeJS. He is presently engaged as a
              Software Engineer in Test within the eCommerce industry, where he
              is responsible for developing sophisticated automated testing
              frameworks. Prior to his current role, Patrick held a position as
              a Lead Software Engineer at a consulting firm, where he provided
              tailor-made IT solutions for clients in the finance and insurance
              sectors.
            </p>
          </Tabs.Item>
        </Tabs>
      </Flowbite>
    </div>
  );
}
