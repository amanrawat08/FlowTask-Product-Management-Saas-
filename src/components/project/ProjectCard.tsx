import { MoveUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { projectsData } from "../../store";
const ProjectCard = () => {
  const navigation = useNavigate();
   
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
