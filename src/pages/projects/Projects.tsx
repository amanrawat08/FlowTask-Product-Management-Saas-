import { Plus } from "lucide-react";
import ProjectCard from "../../components/project/ProjectCard";
import { Outlet } from "react-router-dom";
const Projects = () => {
  
  return (
    <div className="  mt-4 w-full bg-white  p-4">
      <div className="card w-full rounded-md    mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold mt-2 pl-1 mb-3 text-primary ">My Projects</h1>
        <button className="flex items-center gap-1 rounded-md bg-black px-4 py-2 text-white hover:bg-primary-dark cursor-pointer text-sm">
          <Plus size={12} /> New Project
        </button>
      </div>
      <ProjectCard/>
      <Outlet/>
    </div>
  );
};

export default Projects;
