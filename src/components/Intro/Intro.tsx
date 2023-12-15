import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Intro.css";

export default function Intro({ id }: { id: string }) {
  return (
    <div id={id} className="flex flex-wrap mt-10 lg:mt-20 items-center">
      <div className="w-full lg:max-w-[60%] lg:w-fit">
        <p className="slogan">
          Hi,
          <br />
          I'm <span className="highlight">Patrick</span>
          <br />
          Software Engineer
        </p>
        <button
          onClick={() => console.log("contact")}
          className="contact mt-6 mb-6"
        >
          Contact
        </button>
        <div className="flex gap-3 mt-3">
          <a
            href="https://github.com/thminggg"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="inline-block w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/patrick-tse-ca/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="inline-block w-5 h-5" />
          </a>
        </div>
      </div>
      <img
        src="propic2.svg"
        alt="propic"
        className="w-6/12 m-auto min-w-[30%] md:w-5/12 lg:w-4/12 lg:m-0 lg:ml-auto"
      />
    </div>
  );
}
