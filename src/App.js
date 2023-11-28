import "./App.css";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import Project from "./components/Project/Project";

function App() {
  return (
    <div className="main flex flex-wrap max-sm:gap-3 gap-3 p-6 min-h-screen">
      <PersonalInfo />
      <Project />
    </div>
  );
}

export default App;
