import "./App.css";
import Nav from "./components/Nav/Nav";
import Intro from "./components/Intro/Intro";

function App() {
  return (
    <div className="ml-2 mr-2 md:ml-9 md:mr-9 lg:ml-24 lg:mr-24 xl:m-auto max-w-7xl">
      <Nav />
      <Intro id="home" />
    </div>
  );
}

export default App;
