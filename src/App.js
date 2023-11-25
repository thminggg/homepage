import "./App.css";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import Project from "./components/Project/Project";

function App() {
  return (
    <div className="App">
      <div className="main">
        <PersonalInfo />
        <Project />
      </div>
    </div>
  );
}

export default App;
