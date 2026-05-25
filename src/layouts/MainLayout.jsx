import Sidebar from "../components/Sidebar";

const MainLayout = ({
  children
}) => {
  return (
    <div className="flex">

      <Sidebar />

      <div
        className="
        ml-20 md:ml-64
        w-full
        p-4 md:p-6
      "
      >
        {children}
      </div>

    </div>
  );
};

export default MainLayout;
