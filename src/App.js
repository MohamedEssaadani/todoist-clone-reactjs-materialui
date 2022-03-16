// Styles
import "./App.css";
// Components
import Header from "./components/Header";
import ProjectView from "./components/ProjectView";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__body">
        <Sidebar />

        <ProjectView />
      </div>
    </div>
  );
}

export default App;
