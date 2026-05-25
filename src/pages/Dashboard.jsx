const Dashboard = () => {
  return (
    <div>

      <h1
        className="
        text-2xl md:text-4xl
        font-bold
        mb-8
      "
      >
        Dashboard
      </h1>

      <div
        className="
        grid
        grid-cols-1 md:grid-cols-2
        gap-5
      "
      >

        <div className="bg-zinc-900 p-5 rounded-2xl">
          <h2>Total Users</h2>

          <p className="text-3xl mt-3">
            0
          </p>
        </div>

        <div className="bg-zinc-900 p-5 rounded-2xl">
          <h2>Total Claims</h2>

          <p className="text-3xl mt-3">
            0
          </p>
        </div>

        <div className="bg-zinc-900 p-5 rounded-2xl">
          <h2>Total Revenue</h2>

          <p className="text-3xl mt-3">
            $0
          </p>
        </div>

        <div className="bg-zinc-900 p-5 rounded-2xl">
          <h2>Online Users</h2>

          <p className="text-3xl mt-3">
            0
          </p>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;
