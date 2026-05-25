import React, {
  useState
} from "react";

import { createEvent } from "../api/events";

const Events = () => {
  const [title, setTitle] =
    useState("");

  const [rewardPool, setRewardPool] =
    useState("");

  const handleCreate = async () => {
    await createEvent({
      title,
      rewardPool
    });

    alert("Event Created");
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl mb-5">
        Events
      </h1>

      <input
        placeholder="Event Title"
        className="w-full p-3 rounded-lg mb-3 text-black"
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <input
        placeholder="Reward Pool"
        className="w-full p-3 rounded-lg mb-3 text-black"
        onChange={(e) =>
          setRewardPool(e.target.value)
        }
      />

      <button
        onClick={handleCreate}
        className="bg-blue-500 px-5 py-3 rounded-xl"
      >
        Create Event
      </button>
    </div>
  );
};

export default Events;