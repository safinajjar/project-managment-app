import noEntryImg from "../assets/no-projects.png";
import Button from "./Button";

export default function NoEntry({ onAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noEntryImg}
        alt="An empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project selected!
      </h2>
      <p className="text-stone-400 mb-4">Select a project or start a new one</p>
      <p className="mt-8">
        <Button onClick={onAddProject}>Create new project</Button>
      </p>
    </div>
  );
}
