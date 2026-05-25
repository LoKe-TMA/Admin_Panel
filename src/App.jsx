import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Claims from "./pages/Claims";
import Tasks from "./pages/Tasks";
import Events from "./pages/Events";
import Broadcast from "./pages/Broadcast";

import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>

      <MainLayout>

        <Routes>

          <Route
            path="/"
            element={<Dashboard />}
          />

          <Route
            path="/users"
            element={<Users />}
          />

          <Route
            path="/claims"
            element={<Claims />}
          />

          <Route
            path="/tasks"
            element={<Tasks />}
          />

          <Route
            path="/events"
            element={<Events />}
          />

          <Route
            path="/broadcast"
            element={<Broadcast />}
          />

        </Routes>

      </MainLayout>

    </BrowserRouter>
  );
}

export default App;
