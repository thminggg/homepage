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
      base: "flex items-center justify-center whitespace-nowrap p-3 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:ring-cyan-300 focus:outline-none",
    },
  },
};

const tabs = [
  {
    title: "Github",
    icon: FaGithub,
    headline: "Github repositories implemented to demonstrate my tech stacks",
    collection: repos as Array<Collection>,
  },
  {
    title: "Production",
    icon: MdDashboard,
    headline: "Production projects implemented for companies",
    stacks: devStacks,
    collection: devs as Array<Collection>,
  },
  {
    title: "Testing",
    icon: VscDebugAll,
    headline: "Production projects tested for companies",
    collection: tests as Array<Collection>,
  },
];

export default function Project() {
  return (
    <div className="projects flex grow max-lg:w-full w-7/12 p-3 rounded-xl text-start">
      <Flowbite theme={{ theme: { tabs: customTheme } }}>
        <Tabs theme={customTheme}>
          {tabs.map(({ title, icon, headline, stacks, collection }, index) => {
            return (
              <Tabs.Item active title={title} icon={icon} key={index}>
                <div className="flex flex-wrap gap-3">
                  <div className="w-full">{headline}</div>
                  {/* Stacks */}
                  {stacks && (
                    <div className="mb-3">
                      <p className="mb-2">
                        In order not to disclose each project's techstacks,
                        simply listing everything below:
                      </p>
                      {Object.entries(stacks).map(
                        ([title, entries], stackIndex) => (
                          <Stacks
                            stackIndex={stackIndex}
                            title={title}
                            entries={entries}
                          />
                        )
                      )}
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
          })}
          <Tabs.Item title="About me" icon={HiUserCircle}>
            <p className="leading-loose">
              Patrick mainly focuses on Cloud services, FinTech, and Innovation
              using ReactJS and NodeJS. He currently works as a Software
              Engineer in Test for Lululemon to develop automated testing
              frameworks. Before working in the eCommerce sector, he was a lead
              developer at IBM who delivers customized IT solutions for finance
              and insurance firms.
            </p>
          </Tabs.Item>
        </Tabs>
      </Flowbite>
    </div>
  );
}
