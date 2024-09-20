import { FaGithub, FaLinkedin } from "react-icons/fa";
import { handleLinkClick } from "../../helpers/scrollTrack";
import "./Intro.css";

interface IntroProps {
  id: string;
  className?: string;
}

function Intro({ id, className }: IntroProps) {
  return (
    <section id={id} className={className}>
      <div className="w-full flex items-center">
        <div className="w-full md:w-[75%]">
          <p className="slogan">
            Hi,
            <br />
            I'm <span className="highlight">Patrick</span>
            <br />
            Software Engineer
          </p>
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
          src="sitting.svg"
          alt="propic"
          className="hidden w-[25%] h-auto md:block"
        />
      </div>
    </section>
  );
}

export default Intro;
