import { useParams } from "react-router-dom";
import { projectsData } from "../../store";
import {
  ArrowLeft,
  Target,
  SquareKanban,
  ClipboardList,
  SquareUser,
} from "lucide-react";
import StatCard from "../../components/Dashboard/StatCard";
import KanbanBoard from "./KanbanBoard";
import TeamMembers from "../team/TeamMembers";
import { useState } from "react";
const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find((data) => data.id === Number(id));
  

  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="card w-full rounded-md bg-white p-5 shadow-sm shadow-gray-200">
      <button
        className="flex items-center gap-1 text-primary hover:text-primary  cursor-pointer mb-4"
        onClick={() => window.history.back()}
      >
        <ArrowLeft size={16} />
        Projects
      </button>
      <div className=" flex  justify-between items-center">
        <h1 className="text-xl font-bold">{project?.name}</h1>
        <button className="btn btn-primary bg-primary text-white py-1 px-3 rounded cursor-pointer">
          Edit Project
        </button>
      </div>
      <span
        className={`py-1 rounded-full text-xs font-semibold text-yellow-700`}
      >
        Due Date: {project?.dueDate}
      </span>
      <p className="text-gray-600 text-sm mt-4">{project?.description}</p>
      <div>
        <div className="mt-4 flex gap-3 items-center">
          <span
            className={`px-2 py-1 rounded-full text-xs font-semibold ${
              project?.status === "Completed"
                ? "bg-green-100 text-green-800"
                : project?.status === "In Progress"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-yellow-100 text-yellow-800"
            }`}
          >
            {project?.status}
          </span>
          <span
            className={`px-2 py-1 rounded-full text-xs font-semibold ${
              (project?.progress ?? 0) === 100
                ? "bg-green-100 text-green-800"
                : (project?.progress ?? 0) >= 50
                  ? "bg-blue-100 text-blue-800"
                  : "bg-yellow-100 text-yellow-800"
            }`}
          >
            {project?.progress ?? 0}% Complete
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-9">
        {/* Overview */}{" "}
        <button
          type="button"
          className={`relative border border-gray-200 inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md   px-3 text-sm font-medium transition-colors hover:bg-[#F5F5F5] hover:text-[#06B6D4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${activeTab === "overview" ? "bg-primary  text-white" : ""}`} onClick={() => setActiveTab("overview")}
        >
          {" "}
          <Target size={22} strokeWidth={2} className="text-cyan-500" />{" "}
          Overview{" "}
        </button>{" "}
        {/* Board */}{" "}
        <button
          type="button"
          className={`relative  border border-gray-200 inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md   px-3 text-sm font-medium transition-colors hover:bg-primary hover:text-[#60A5FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${activeTab === "board" ? "bg-primary text-white" : ""}`} onClick={() => setActiveTab("board")}
        >
          {" "}
          <SquareKanban
            size={22}
            strokeWidth={2}
            className="text-blue-400"
          />{" "}
          Board{" "}
        </button>{" "}
        {/* ClipboardList  */}{" "}
        <button
          type="button"
          className={`relative  border border-gray-200 inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md   px-3 text-sm font-medium transition-colors hover:bg-primary hover:text-[#FACC14] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${activeTab === "tasks" ? "bg-primary text-white" : ""}`} onClick={() => setActiveTab("tasks")}
        >
          {" "}
          <ClipboardList
            size={22}
            strokeWidth={2}
            className="text-yellow-400"
          />{" "}
          Tasks{" "}
        </button>{" "}
        {/* Team */}{" "}
        <button
          type="button"
          className={`relative  border border-gray-200 inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md   px-3 text-sm font-medium transition-colors hover:bg-primary hover:text-[#FB923C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${activeTab === "team" ? "bg-primary text-white" : ""}`} onClick={() => setActiveTab("team")}
        >
          {" "}
          <SquareUser
            size={22}
            strokeWidth={2}
            fill="#000"
            className=" text-[#FB923C]"
          />{" "}
          Team{" "}
        </button>{" "}
      </div>
      <div className="mt-4">
        {activeTab === "overview" && (<><h4 className="text-lg font-semibold mb-5">Overview</h4>
        <StatCard/></>)}
        {activeTab === "board" && <KanbanBoard/>}
        {activeTab === "team" && <TeamMembers/>}
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-5 mt-9">Recent Activity</h4>
        <div className="card w-full   shadow-gray-200">
          <p className="text-gray-600 text-sm mt-4">
            Aman Completed the task "Design Landing Page" on 2023-07-15.
          </p>
          <p className="text-gray-600 text-sm mt-4">
            Sarah updated the project description on 2023-07-14.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
