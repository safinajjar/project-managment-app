import { useState } from "react";
import NewProject from "./components/NewProject";
import NoEntry from "./components/NoEntry";
import Sidebar from "./components/Sidebar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: [],
  });

  const handleAddProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProject: null,
      };
    });
  };

  const handleCancelAddProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
      };
    });
  };

  let content;

  if (projectsState.selectedProject === null) {
    content = <NewProject onCancelAddProject={handleCancelAddProject} />;
  } else if (projectsState.selectedProject === undefined) {
    content = <NoEntry onAddProject={handleAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onAddProject={handleAddProject} />
      {content}
    </main>
  );
}

export default App;
