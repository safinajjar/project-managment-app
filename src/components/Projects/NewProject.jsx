import { useRef } from "react";
import Input from "../UI/Input";
import Modal from "../UI/Modal";

export default function NewProject({ onCancelAddProject, onAddProject }) {
  const modal = useRef(null);
  const projectName = useRef(null);
  const description = useRef(null);
  const dueDate = useRef(null);

  const handleSaveProject = () => {
    const enteredName = projectName.current.value.trim();
    const enteredDescription = description.current.value.trim();
    const enteredDueDate = dueDate.current.value.trim();

    if (
      enteredName === "" ||
      enteredDescription === "" ||
      enteredDueDate === ""
    ) {
      // show error modal
      modal.current.open();
      return;
    }

    onAddProject({
      name: enteredName,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="OK">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Please fill in all fields</p>
      </Modal>

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
    </>
  );
}
