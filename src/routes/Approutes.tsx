import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import Projects from "../pages/projects/Projects";
import ProjectDetails from "../pages/projects/ProjectDetails";
import StatCard from "../components/Dashboard/StatCard";
import KanbanBoard from "../pages/projects/KanbanBoard";
import TeamMembers from "../pages/team/TeamMembers";
import Profile from "../pages/profile/Profile";
import Notifications from "../pages/notifications/Notifications";

const Approutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />

        <Route path="/projects/:id" element={<ProjectDetails />}>
          <Route index element={<StatCard />} />
          <Route path="board" element={<KanbanBoard />} />
          <Route path="task" element={<KanbanBoard />} />
          <Route path="team" element={<TeamMembers />}></Route>
        </Route>
        <Route path="/projects/:id/team/:member_id" element={<Profile />} />
        <Route path="/notification" element={<Notifications />} />
      </Route>
    </Routes>
  );
};

export default Approutes;
