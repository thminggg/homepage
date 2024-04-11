import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro";
import Nav from "./components/Nav/Nav";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import { trackResize, trackScroll } from "./helpers/scrollTrack";

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    trackResize(window.innerWidth);
    trackScroll();
  }, []);

  return (
    <div className={`${dark && "dark bg-dark text-white"}`}>
      <Nav dark={dark} setDark={setDark} />
      <div className="pl-6 pr-6 pb-48 lg:pl-0 lg:pr-0 lg:m-auto max-w-5xl">
        <Intro id="home" />
        <About id="about" />
        <Skills id="skills" />
        <Works id="works" dark={dark} />
        <Contact id="contact" />
      </div>
    </div>
  );
}

export default App;
