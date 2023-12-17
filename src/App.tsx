import { useEffect } from "react";
import "./App.css";
import Intro from "./components/Intro/Intro";
import Nav from "./components/Nav/Nav";
import Separator from "./components/Separator/Separator";
import { trackResize, trackScroll } from "./helpers/scrollTrack";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";

function App() {
  useEffect(() => {
    trackResize(window.innerWidth);
    trackScroll();
  }, []);

  return (
    <>
      <Nav />
      <Separator className="mt-1" />
      <div className="pl-6 pr-6 pb-48 lg:pl-0 lg:pr-0 lg:m-auto max-w-5xl">
        <Intro id="home" />
        <About id="about" />
        <Skills id="skills" />
        <Works id="skills" />
        <section
          id="contact"
          style={{ minHeight: "648px", paddingTop: "80px" }}
        >
          contact
        </section>
      </div>
    </>
  );
}

export default App;
