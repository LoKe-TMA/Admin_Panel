import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-zinc-900 p-5 fixed">

      <h1 className="text-2xl font-bold mb-10">
        MineUC Admin
      </h1>

      <div className="flex flex-col gap-4">

        <Link to="/">
          Dashboard
        </Link>

        <Link to="/users">
          Users
        </Link>

        <Link to="/claims">
          Claims
        </Link>

        <Link to="/tasks">
          Tasks
        </Link>

        <Link to="/events">
          Events
        </Link>

        <Link to="/broadcast">
          Broadcast
        </Link>

      </div>
    </div>
  );
};

export default Sidebar;
