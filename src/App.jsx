import { useState } from "react";
import NewProject from "./components/NewProject";
import NoEntry from "./components/NoEntry";
import Sidebar from "./components/Sidebar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: [],
  });

  const handleStartAddProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProject: null,
      };
    });
  };

  const handleAddProject = (project) => {
    setProjectsState((prevState) => {
      const newProject = {
        ...project,
        id: Math.random().toString(),
      };

      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
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

  console.log(projectsState);

  let content;

  if (projectsState.selectedProject === null) {
    content = (
      <NewProject
        onCancelAddProject={handleCancelAddProject}
        onAddProject={handleAddProject}
      />
    );
  } else if (projectsState.selectedProject === undefined) {
    content = <NoEntry onAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
