import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro";
import Nav from "./components/Nav/Nav";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import { trackResize, trackScroll } from "./helpers/scrollTrack";
import { FirebaseProvider } from "./providers/firebaseProvider";

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    trackResize(window.innerWidth);
    trackScroll();
  }, []);

  return (
    <FirebaseProvider>
      <div className={`${dark ? "dark bg-dark text-white" : ""}`}>
        <div className="max-w-screen-2xl mx-auto duration-700">
          <Nav dark={dark} setDark={setDark} />
          <div className="flex flex-col">
            <Intro
              id="home"
              className="min-h-screen flex items-center px-6 pb-32"
            />
            <About
              id="about"
              className="min-h-screen flex items-center px-6 pb-32"
            />
            <Works
              id="works"
              className="min-h-screen flex items-center justify-center px-6 pb-32"
            />
            <Skills
              id="skills"
              className="min-h-screen flex items-center justify-center px-6 pb-32"
            />
            <Contact
              id="contact"
              className="min-h-screen flex items-center justify-center px-6 pb-32"
            />
          </div>
        </div>
      </div>
    </FirebaseProvider>
  );
}

export default App;
