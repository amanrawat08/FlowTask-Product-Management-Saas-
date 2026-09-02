import { MoveUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
const ProjectCard = () => {
  const navigation = useNavigate();
  const projectsData = [
    {
      id: 1,
      name: "E-Commerce Website",
      description:
        "Build a modern e-commerce platform with product listing, cart, and checkout.",
      progress: 75,
      status: "In Progress",
      tasks: 24,
      members: 5,
      dueDate: "Sep 15, 2026",
    },
    {
      id: 2,
      name: "Mobile Banking App",
      description:
        "Develop a secure mobile banking application with payment and transaction features.",
      progress: 45,
      status: "In Progress",
      tasks: 32,
      members: 7,
      dueDate: "Oct 05, 2026",
    },
    {
      id: 3,
      name: "Portfolio Website",
      description:
        "Create a responsive portfolio website for showcasing projects and skills.",
      progress: 100,
      status: "Completed",
      tasks: 15,
      members: 2,
      dueDate: "Aug 28, 2026",
    },
    {
      id: 4,
      name: "Job Portal",
      description:
        "Build a job portal where candidates can find jobs and companies can hire talent.",
      progress: 60,
      status: "In Progress",
      tasks: 40,
      members: 8,
      dueDate: "Sep 30, 2026",
    },
    {
      id: 5,
      name: "CRM Dashboard",
      description:
        "Create a customer relationship management dashboard with analytics and reports.",
      progress: 30,
      status: "In Progress",
      tasks: 28,
      members: 4,
      dueDate: "Oct 20, 2026",
    },
    {
      id: 6,
      name: "Task Management System",
      description:
        "Develop a collaborative task management system for teams and projects.",
      progress: 85,
      status: "In Progress",
      tasks: 35,
      members: 6,
      dueDate: "Sep 10, 2026",
    },
    {
      id: 7,
      name: "Food Delivery App",
      description:
        "Build a food delivery application with restaurants, orders, and delivery tracking.",
      progress: 20,
      status: "Planning",
      tasks: 50,
      members: 9,
      dueDate: "Nov 15, 2026",
    },
    {
      id: 8,
      name: "Analytics Dashboard",
      description:
        "Design an analytics dashboard to visualize business performance and key metrics.",
      progress: 100,
      status: "Completed",
      tasks: 18,
      members: 3,
      dueDate: "Aug 20, 2026",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 w-full">
      {projectsData.map((project) => (
        <div
          key={project.id}
          className="card w-full rounded-md bg-white p-5 shadow-sm shadow-gray-200"
        >
          <div className="flex gap-2 items-center">
            <h2 className="text-xl font-bold">{project.name}</h2>{" "}
            <span className="text-primary text-bold cursor-pointer  " onClick={() => navigation(`/projects/${project.id}`)}>
              <MoveUpRight className="text-sm" />
            </span>
          </div>
          <p className="text-gray-600 text-sm mt-2">{project.description}</p>
          <div className="mt-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Progress</span>
              <span className="text-sm font-bold">{project.progress}%</span>
            </div>
            <div className="mt-2 h-2 bg-gray-200 rounded-full">
              <div
                className="h-full bg-primary rounded-full"
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <span
              className={`px-2 py-1 rounded-full text-xs font-semibold ${
                project.status === "Completed"
                  ? "bg-green-100 text-green-800"
                  : project.status === "In Progress"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-yellow-100 text-yellow-800"
              }`}
            >
              {project.status}
            </span>
            <span className="text-sm text-gray-500">
              Due: {project.dueDate}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
