import NewProject from "./components/NewProject";
import NoEntry from "./components/NoEntry";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar />
      {/* <NewProject /> */}
      <NoEntry />
    </main>
  );
}

export default App;
