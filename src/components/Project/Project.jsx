import { Tabs } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import "./Project.css";
import Card from "../Card/Card";

const devs = [
  {
    links: [
      {
        url: "https://www.hangseng.com/en-hk/business/banking-digitally/online-services-beri-whatsapp/",
        title: "Hang Seng Bank BERI Chatbot",
      },
    ],
    title: "WhatsApp AI Chatbot",
    highlights: "",
  },
  {
    links: [
      {
        url: "https://www.ufinancehk.co/",
        title: "Financne Web App",
      },
    ],
    title: "Finance Web App",
    highlights: "",
  },
  {
    links: [
      {
        url: "https://www.sportsync.com/",
        title: "Sportsync Web App",
      },
    ],
    title: "Athlete Scouting Web App",
    highlights: "",
  },
  {
    links: [],
    title: "AI Recommendation Engine",
    highlights: "",
  },
  {
    links: [],
    title: "Data Pipeline and Visualisation of Adobe Analytics and Big Data",
    highlights: "",
  },
];

const tests = [
  {
    links: [
      {
        url: "https://play.google.com/store/apps/details?id=tw.hsbc.hsbctaiwan&hl=en_CA&gl=US",
        title: "Taiwan",
      },
      {
        url: "https://play.google.com/store/search?q=hsbc%20malaysia&c=apps&hl=en_CA&gl=US",
        title: "Malaysia",
      },
      {
        url: "https://play.google.com/store/search?q=hsbc%20vietnam&c=apps&hl=en_CA&gl=US",
        title: "Vietnam",
      },
    ],
    title: "Mobile Banking Apps",
    highlights: "",
  },
  {
    links: [
      {
        url: "https://www.hsbc.co.nz/",
        title: "New Zealand",
      },
      {
        url: "https://www.hsbc.com.vn/en-vn/",
        title: "Vietnam",
      },
    ],
    title: "Internet Banking",
    highlights: "",
  },
];

export default function Project() {
  return (
    <div className="projects flex grow max-lg:w-full w-7/12 p-3 rounded-xl text-start">
      <Tabs>
        <Tabs.Item active title="Development" icon={MdDashboard}>
          <div className="flex flex-wrap gap-3">
            {devs.map(({ links, title }) => (
              <Card links={links} title={title} />
            ))}
          </div>
        </Tabs.Item>
        <Tabs.Item title="Testing" icon={MdDashboard}>
          <div className="flex flex-wrap gap-3">
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
