import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Intro.css";
import { handleLinkClick } from "../../helpers/scrollTrack";

export default function Intro({ id }: { id: string }) {
  return (
    <section id={id} className="flex flex-wrap items-center pt-20">
      <div className="w-full lg:max-w-[60%] lg:w-fit">
        <p className="slogan">
          Hi,
          <br />
          I'm <span className="highlight">Patrick</span>
          <br />
          Software Engineer
        </p>
        {/* <a href="#contact" onClick={(e) => handleLinkClick(e, "#contact")}>
          <button className="contact mt-6 mb-6">Contact</button>
        </a> */}
        <a
          href="#contact"
          className="contact mt-6 mb-6"
          onClick={(e) => handleLinkClick(e, "#contact")}
        >
          Contact
        </a>
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
    </section>
  );
}
