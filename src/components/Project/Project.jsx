import { Tabs } from "flowbite-react";
import { FaGithub } from "react-icons/fa";
import { HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { VscDebugAll } from "react-icons/vsc";
import devs from "../../data/dev-projects.json";
import repos from "../../data/repos.json";
import tests from "../../data/test-projects.json";
import Card from "../Card/Card";
import "./Project.css";

import { Flowbite } from "flowbite-react";

const customTheme = {
  base: "flex flex-col gap-2 w-full",
  tablist: {
    base: "flex text-center",
    styles: {
      default:
        "tablist flex-wrap border-b border-white-200 max-md:flex-nowrap overflow-x-auto",
    },
    tabitem: {
      base: "flex items-center justify-center whitespace-nowrap p-3 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:ring-cyan-300 focus:outline-none",
    },
  },
};

export default function Project() {
  return (
    <div className="projects flex grow max-lg:w-full w-7/12 p-3 rounded-xl text-start">
      <Flowbite theme={{ theme: customTheme }}>
        <Tabs theme={customTheme}>
          <Tabs.Item active title="Production Project" icon={MdDashboard}>
            <div className="flex flex-wrap gap-3">
              <div className="w-full">
                Production projects implemented for companies
              </div>
              {devs.map(({ links, title }, index) => (
                <Card key={index} links={links} title={title} />
              ))}
            </div>
          </Tabs.Item>
          <Tabs.Item title="Github" icon={FaGithub}>
            <div className="flex flex-wrap gap-3">
              <div className="w-full">
                Github repositories implemented to demonstrate my tech stacks
              </div>
              {repos.map(({ links, title }, index) => (
                <Card key={index} links={links} title={title} />
              ))}
            </div>
          </Tabs.Item>
          <Tabs.Item title="Testing" icon={VscDebugAll}>
            <div className="flex flex-wrap gap-3">
              <div className="w-full">
                Production projects tested for companies
              </div>
              {tests.map(({ links, title }, index) => (
                <Card key={index} links={links} title={title} />
              ))}
            </div>
          </Tabs.Item>
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
