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
import { BiLogoGraphql } from "react-icons/bi";
import { SiGithubactions } from "react-icons/si";

interface SkillsProps {
  id: string;
  className?: string;
}

function Skills({ id, className }: SkillsProps) {
  return (
    <section
      id={id}
      className={`flex flex-col ${className}`}
      style={{ paddingTop: "80px" }}
    >
      <h1 className="w-full text-center text-3xl section-highlight">Skills</h1>
      <div className="w-full flex flex-col gap-3 mt-3 mb-3">
        <div className="stacks grid grid-rows-4 gap-3">
          <div className="flex flex-wrap justify-evenly items-center gap-3">
            <SiAmazonaws className="aws" title="Amazon Web Services" />
            <SiMicrosoftazure
              className="w-9 h-auto azure"
              title="Microsoft Azure"
            />
          </div>
          <div className="flex flex-wrap justify-evenly items-center gap-3">
            <BiLogoTypescript className="ts" title="TypeScript" />
            <BiLogoJavascript className="js" title="JavaScript" />
            <BiLogoReact className="react" title="React" />
            <SiTailwindcss className="tailwind" title="Tailwind CSS" />
            <BiLogoGraphql className="graphql" title="GraphQL" />
            <BiLogoNodejs className="nodejs" title="Node.js" />
            <img src="python.svg" alt="python" title="Python" />
          </div>
          <div className="flex flex-wrap justify-evenly items-center gap-3">
            <SiAmazondynamodb className="dynamodb" title="Amazon DynamoDB" />
            <BiLogoPostgresql className="postgres" title="PostgreSQL" />
            <SiApachekafka className="kafka" title="Apache Kafka" />
            <SiDatabricks className="databricks" title="Databricks" />
          </div>
          <div className="flex flex-wrap justify-evenly items-center gap-3">
            <SiKubernetes className="k8s" title="Kubernetes" />
            <SiDocker className="docker" title="Docker" />
            <img
              src="jenkins.svg"
              className="w-12 h-auto"
              alt="jenkins"
              title="Jenkins"
            />
            <SiGithubactions
              className="github-actions"
              title="GitHub Actions"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
