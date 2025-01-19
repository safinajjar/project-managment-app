import { useRef, useState } from "react";
import Modal from "../UI/Modal";

export default function NewTask({ onAdd }) {
  const modal = useRef(null);
  const [task, setTask] = useState("");

  const handleChange = (event) => {
    setTask(event.target.value.trim());
  };

  const handleAddTask = () => {
    if (task === "") {
      modal.current.open();
      return;
    }
    onAdd(task);
    setTask("");
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="OK">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Task cannot be empty.</p>
      </Modal>
      <div className="flex items-center gap-4">
        <input
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          onChange={handleChange}
          value={task}
        />
        <button
          onClick={handleAddTask}
          className="text-stone-700 hover:text-stone-950"
        >
          Add Task
        </button>
      </div>
    </>
  );
}
