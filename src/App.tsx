import "./App.css";
import Nav from "./components/Nav/Nav";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <div className="mt-16 ml-36 mr-36 max-h-screen max-md:ml-6 max-md:mr-6">
      <Nav />
      <div className="flex flex-wrap mt-20 items-center">
        <div>
          <p className="slogan">
            Hi,
            <br />
            I'm <span className="highlight">Patrick</span>
            <br />
            Software Engineer
          </p>
          <div className="flex gap-3 mt-3">
            <a
              href="https://github.com/thminggg"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="inline-block w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/patrick-tse-ca/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="inline-block w-8 h-8" />
            </a>
          </div>
        </div>
        <img
          src="propic2.svg"
          alt="propic"
          className="
          w-7/12
          m-auto
          xl:w-4/12 
          xl:m-0
          xl:ml-auto
          "
        />
      </div>
    </div>
  );
}

export default App;
