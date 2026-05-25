import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="
      w-20 md:w-64
      h-screen
      bg-zinc-900
      p-3 md:p-5
      fixed
    "
    >
      <h1
        className="
        text-sm md:text-2xl
        font-bold
        mb-10
      "
      >
        MineUC
      </h1>

      <div className="flex flex-col gap-6">

        <Link to="/">
          📊
          <span className="hidden md:inline ml-2">
            Dashboard
          </span>
        </Link>

        <Link to="/users">
          👤
          <span className="hidden md:inline ml-2">
            Users
          </span>
        </Link>

        <Link to="/claims">
          🎁
          <span className="hidden md:inline ml-2">
            Claims
          </span>
        </Link>

        <Link to="/tasks">
          ✅
          <span className="hidden md:inline ml-2">
            Tasks
          </span>
        </Link>

        <Link to="/events">
          🏆
          <span className="hidden md:inline ml-2">
            Events
          </span>
        </Link>

        <Link to="/broadcast">
          📢
          <span className="hidden md:inline ml-2">
            Broadcast
          </span>
        </Link>

      </div>
    </div>
  );
};

export default Sidebar;
