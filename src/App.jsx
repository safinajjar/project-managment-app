import { useState } from "react";
import NewProject from "./components/NewProject";
import NoEntry from "./components/NoEntry";
import Sidebar from "./components/Sidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const handleStartAddProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  const handleAddProject = (project) => {
    const projectId = Math.random().toString();
    setProjectsState((prevState) => {
      const newProject = {
        ...project,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  const handleCancelAddProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };

  const handleSelectProject = (projectId) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projectId,
      };
    });
  };

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  let content = <SelectedProject project={selectedProject} />;

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        onCancelAddProject={handleCancelAddProject}
        onAddProject={handleAddProject}
      />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoEntry onAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
