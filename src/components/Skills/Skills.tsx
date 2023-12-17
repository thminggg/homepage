import {
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoTypescript,
} from "react-icons/bi";
import {
  SiAmazonaws,
  SiAmazondynamodb,
  SiApachekafka,
  SiDatabricks,
  SiDocker,
  SiKubernetes,
  SiMicrosoftazure,
  SiTailwindcss,
} from "react-icons/si";
import "./Skills.css";

export default function Skills({ id }: { id: string }) {
  return (
    <section
      id={id}
      className="flex flex-wrap items-center pt-20"
      style={{ minHeight: "648px", paddingTop: "80px" }}
    >
      <h1 className="w-full text-center text-3xl section-highlight">Skills</h1>
      <div className="w-full flex flex-col gap-3 mt-3 mb-3 md:w-6/12">
        <h2 className="text-center text-xl mb-6 title">Professional Skills</h2>
        <div className="stacks grid grid-rows-4 gap-3">
          <div className="flex flex-wrap justify-evenly items-center gap-3">
            <SiAmazonaws className="aws" />
            <SiMicrosoftazure className="w-9 h-auto azure" />
          </div>
          <div className="flex flex-wrap justify-evenly items-center gap-3">
            <BiLogoTypescript className="ts" />
            <BiLogoJavascript className="js" />
            <BiLogoReact className="react" />
            <SiTailwindcss className="tailwind" />
            <BiLogoNodejs className="nodejs" />
            <img src="python.svg" alt="python" />
          </div>
          <div className="flex flex-wrap justify-evenly items-center gap-3">
            <SiAmazondynamodb className="dynamodb" />
            <BiLogoPostgresql className="postgres" />
            <SiApachekafka />
            <SiDatabricks className="databricks" />
          </div>
          <div className="flex flex-wrap justify-evenly items-center gap-3">
            <SiKubernetes className="k8s" />
            <SiDocker className="docker" />
            <img src="jenkins.svg" className="w-12 h-auto" alt="jenkins" />
          </div>
        </div>
      </div>
      <div className="w-full md:w-6/12">
        <img
          src="it-abstract.svg"
          className="hidden w-auto h-auto ml-auto mr-auto md:inline-block"
          alt="it-abstract"
        />
        <img
          src="up.svg"
          className="block w-9/12 h-auto ml-auto mr-auto mt-9 md:hidden"
          alt="it-abstract"
        />
      </div>
    </section>
  );
}
