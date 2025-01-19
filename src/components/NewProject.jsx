import { useRef } from "react";
import Input from "./Input";

export default function NewProject({ onCancelAddProject, onAddProject }) {
  const projectName = useRef(null);
  const description = useRef(null);
  const dueDate = useRef(null);

  const handleSaveProject = () => {
    const enteredName = projectName.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    onAddProject({
      name: enteredName,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button
            onClick={onCancelAddProject}
            className="text-stone-800 hover:text-stone-950"
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSaveProject}
            className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md"
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input
          id="projectName"
          type="text"
          ref={projectName}
          label="Project Name"
        />
        <Input
          id="description"
          ref={description}
          label="Description"
          textarea
        />
        <Input id="due_date" type="date" ref={dueDate} label="Due Date" />
      </div>
    </div>
  );
}
