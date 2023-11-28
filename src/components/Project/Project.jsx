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

export default function Project() {
  return (
    <div className="projects flex grow max-lg:w-full w-7/12 p-3 rounded-xl text-start">
      <Tabs>
        <Tabs.Item active title="Production Project" icon={MdDashboard}>
          <div className="flex flex-wrap gap-3">
            <div className="w-full">
              Production projects implemented for companies
            </div>
            {devs.map(({ links, title }) => (
              <Card links={links} title={title} />
            ))}
          </div>
        </Tabs.Item>
        <Tabs.Item title="Github" icon={FaGithub}>
          <div className="flex flex-wrap gap-3">
            <div className="w-full">
              Github repositories implemented to demonstrate my tech stacks
            </div>
            {repos.map(({ links, title }) => (
              <Card links={links} title={title} />
            ))}
          </div>
        </Tabs.Item>
        <Tabs.Item title="Testing" icon={VscDebugAll}>
          <div className="flex flex-wrap gap-3">
            <div className="w-full">
              Production projects tested for companies
            </div>
            {tests.map(({ links, title }) => (
              <Card links={links} title={title} />
            ))}
          </div>
        </Tabs.Item>
        <Tabs.Item title="About me" icon={HiUserCircle}>
          <p className="leading-loose">
            Patrick mainly focuses on Cloud services, FinTech, and Innovation
            using ReactJS and NodeJS. He currently works as a Software Engineer
            in Test for Lululemon to develop automated testing frameworks.
            Before working in the eCommerce sector, he was a lead developer at
            IBM who delivers customized IT solutions for finance and insurance
            firms.
          </p>
        </Tabs.Item>
      </Tabs>
    </div>
  );
}
