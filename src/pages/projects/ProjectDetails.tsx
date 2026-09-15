import { Link, useNavigate, useParams } from "react-router-dom";
import { projectsData } from "../../store";
import { Outlet } from "react-router-dom";
import {
  ArrowLeft,
  Target,
  SquareKanban,
  ClipboardList,
  SquareUser,
} from "lucide-react";
const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find((data) => data.id === Number(id));

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
        <Link
          to=""
          type="button"
          className="relative border border-gray-200 inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md   px-3 text-sm font-medium transition-colors hover:bg-[#F5F5F5] hover:text-[#06B6D4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          {" "}
          <Target size={22} strokeWidth={2} className="text-cyan-500" />{" "}
          Overview{" "}
        </Link>{" "}
        {/* Board */}{" "}
        <Link
          type="button"
          className="relative  border border-gray-200 inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md   px-3 text-sm font-medium transition-colors hover:bg-primary hover:text-[#60A5FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 "
          to="board"
        >
          {" "}
          <SquareKanban
            size={22}
            strokeWidth={2}
            className="text-blue-400"
          />{" "}
          Board{" "}
        </Link>{" "}
        {/* ClipboardList  */}{" "}
        <Link
          type="button"
          className="relative  border border-gray-200 inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md   px-3 text-sm font-medium transition-colors hover:bg-primary hover:text-[#FACC14] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2  "
          to="task"
        >
          {" "}
          <ClipboardList
            size={22}
            strokeWidth={2}
            className="text-yellow-400"
          />{" "}
          Tasks{" "}
        </Link>{" "}
        {/* Team */}{" "}
        <Link
          to="team"
          type="button"
          className="relative  border border-gray-200 inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md   px-3 text-sm font-medium transition-colors hover:bg-primary hover:text-[#FB923C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 "
        >
          {" "}
          <SquareUser
            size={22}
            strokeWidth={2}
            fill="#000"
            className=" text-[#FB923C]"
          />{" "}
          Team{" "}
        </Link>{" "}
      </div>
      <div className="mt-4">
        <Outlet />
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
