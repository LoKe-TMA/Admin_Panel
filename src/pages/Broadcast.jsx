import React, {
  useState
} from "react";

import { sendBroadcast } from "../api/notifications";

const Broadcast = () => {
  const [title, setTitle] =
    useState("");

  const [message, setMessage] =
    useState("");

  const handleSend = async () => {
    await sendBroadcast({
      title,
      message
    });

    alert("Broadcast Sent");
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl mb-5">
        Broadcast
      </h1>

      <input
        placeholder="Title"
        className="w-full p-3 rounded-lg mb-3 text-black"
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <textarea
        placeholder="Message"
        className="w-full p-3 rounded-lg mb-3 text-black"
        onChange={(e) =>
          setMessage(e.target.value)
        }
      />

      <button
        onClick={handleSend}
        className="bg-red-500 px-5 py-3 rounded-xl"
      >
        Send
      </button>
    </div>
  );
};

export default Broadcast;