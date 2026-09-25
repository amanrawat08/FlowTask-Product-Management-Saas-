 
import { LayoutDashboard, Settings, LogOut, FolderOpenDot ,ClipboardList ,BellRing, SquareUser ,UserPen  } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="card w-72 rounded-md bg-white p-5 shadow-md shadow-purple-200/50 h-screen  sticky top-0 left-0 border-r border-border">
      
      <div className=" text-2xl font-bold text-gray-900 mb-4">Flow<span className="text-primary">Task</span></div>
      <ul className="flex w-full flex-col  ">

        {/* Dashboard */}
        <li className="w-full cursor-pointer whitespace-nowrap" onClick={() => navigate("/dashboard")}>
          <button className="group flex size-full items-center   rounded-xs  p-2 py-3 font-semibold text-gray-700 transition-all ease-linear hover:bg-primary-light hover:shadow-inner focus:bg-gradient-to-r focus:from-primary focus:to-primary focus:text-white cursor-pointer  border-b-2 border-border border-b-2 border-border">
            <LayoutDashboard
              size={24}
              className="group-focus:text-white"
            />&nbsp;
            Dashboard
          </button>
        </li>
        {/* Projects */}
        <li className="w-full cursor-pointer whitespace-nowrap" onClick={() => navigate("/projects")}>
          <button className="group flex size-full items-center   rounded-xs  p-2 py-3 font-semibold text-gray-700 transition-all ease-linear hover:bg-primary-light hover:shadow-inner focus:bg-gradient-to-r focus:from-primary focus:to-primary focus:text-white cursor-pointer  border-b-2 border-border">
            <FolderOpenDot
              size={24}
              className="group-focus:text-white"
            />&nbsp;
            Projects
          </button>
        </li>
        {/* My tasks */}
        <li className="w-full cursor-pointer whitespace-nowrap" onClick={() => navigate("/tasks")}>
          <button className="group flex size-full items-center   rounded-xs  p-2 py-3 font-semibold text-gray-700 transition-all ease-linear hover:bg-primary-light hover:shadow-inner focus:bg-gradient-to-r focus:from-primary focus:to-primary focus:text-white cursor-pointer  border-b-2 border-border">
            <ClipboardList
              size={24}
              className="group-focus:text-white"
            />&nbsp;
            My Tasks
          </button>
        </li>
        {/* Team */}
        <li className="w-full cursor-pointer whitespace-nowrap" onClick={() => navigate("/team")}>
          <button className="group flex size-full items-center   rounded-xs  p-2 py-3 font-semibold text-gray-700 transition-all ease-linear hover:bg-primary-light hover:shadow-inner focus:bg-gradient-to-r focus:from-primary focus:to-primary focus:text-white cursor-pointer  border-b-2 border-border">
            <SquareUser
              size={24}
              className="group-focus:text-white"
            />&nbsp;
            Team
          </button>
        </li>
        {/* Notification */}
        <li className="w-full cursor-pointer whitespace-nowrap" onClick={() => navigate("/notification")}>
          <button className="group flex size-full items-center   rounded-xs  p-2 py-3 font-semibold text-gray-700 transition-all ease-linear hover:bg-primary-light hover:shadow-inner focus:bg-gradient-to-r focus:from-primary focus:to-primary focus:text-white cursor-pointer  border-b-2 border-border">
            <BellRing
              size={24}
              className="group-focus:text-white"
            /> &nbsp;
            Notification
          </button>
        </li>
        {/* Profile */}
        <li className="w-full cursor-pointer whitespace-nowrap" onClick={() => navigate("/profile/2")}>
          <button className="group flex size-full items-center   rounded-xs  p-2 py-3 font-semibold text-gray-700 transition-all ease-linear hover:bg-primary-light hover:shadow-inner focus:bg-gradient-to-r focus:from-primary focus:to-primary focus:text-white cursor-pointer  border-b-2 border-border">
            <UserPen
              size={24}
              className="group-focus:text-white"
            />&nbsp;
            Profile
          </button>
        </li>


        {/* Settings */}
        <li className="w-full cursor-pointer whitespace-nowrap">
          <button className="group flex size-full items-center   rounded-xs  p-2 py-3  font-semibold text-gray-700 transition-all ease-linear hover:bg-primary-light hover:shadow-inner focus:bg-gradient-to-r focus:from-primary focus:to-primary-light focus:text-white cursor-pointer  border-b-2 border-border">
            <Settings
              size={24}
              className="group-focus:text-white"
            />&nbsp;
            Settings
          </button>
        </li>

        {/* Logout */}
        <li className="w-full cursor-pointer whitespace-nowrap">
          <button className="group flex size-full items-center   rounded-xs  p-2 py-3 font-semibold text-gray-700 transition-all ease-linear hover:bg-primary-light hover:shadow-inner focus:bg-gradient-to-r focus:from-primary focus:to-primary focus:text-white cursor-pointer  border-b-2 border-border">
            <LogOut
              size={24}
              className="group-focus:text-white"
            />&nbsp;
            Logout
          </button>
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;
 
