import { Tabs } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import "./Project.css";

export default function Project() {
  return (
    <div className="projects flex grow max-lg:w-full w-7/12 p-3 rounded-xl text-start">
      <Tabs aria-label="Default tabs" style="default">
        <Tabs.Item title="Projects" icon={MdDashboard}>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </Tabs.Item>
        <Tabs.Item active title="About me" icon={HiUserCircle}>
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
