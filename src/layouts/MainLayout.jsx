import Sidebar from "../components/Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex">

      <Sidebar />

      <div className="ml-64 w-full p-5">
        {children}
      </div>

    </div>
  );
};

export default MainLayout;
