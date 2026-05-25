import React, {
  useState
} from "react";

import { createTask } from "../api/tasks";

const Tasks = () => {
  const [title, setTitle] =
    useState("");

  const [reward, setReward] =
    useState("");

  const handleCreate = async () => {
    await createTask({
      title,
      reward
    });

    alert("Task Created");
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl mb-5">
        Create Task
      </h1>

      <input
        placeholder="Title"
        className="w-full p-3 rounded-lg mb-3 text-black"
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <input
        placeholder="Reward"
        className="w-full p-3 rounded-lg mb-3 text-black"
        onChange={(e) =>
          setReward(e.target.value)
        }
      />

      <button
        onClick={handleCreate}
        className="bg-yellow-500 px-5 py-3 rounded-xl"
      >
        Create
      </button>
    </div>
  );
};

export default Tasks;