import MyTasksCard from "../../components/MyTasks/MyTasksCard";

const tasks = [
  {
    id: 1,
    title: "Design Payment UI",
    project: "E-Commerce Website",
    priority: "High",
    dueDate: "Sep 28, 2026",
    status: "In Progress",
  },
  {
    id: 2,
    title: "Create Login Page",
    project: "Task Management App",
    priority: "Medium",
    dueDate: "Sep 29, 2026",
    status: "To Do",
  },
  {
    id: 3,
    title: "Fix Responsive Layout",
    project: "Marketing Website",
    priority: "High",
    dueDate: "Sep 30, 2026",
    status: "In Progress",
  },
  {
    id: 4,
    title: "Update User Profile",
    project: "HR Management System",
    priority: "Low",
    dueDate: "Oct 02, 2026",
    status: "Completed",
  },
  {
    id: 5,
    title: "Implement Notification UI",
    project: "Task Management App",
    priority: "Medium",
    dueDate: "Oct 04, 2026",
    status: "To Do",
  },
];
const MyTasks = () => {
  return (
    <div className="max-w-5xl">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">My Tasks</h1>
        <p className="mt-1 text-sm text-gray-light">
          Manage and track your assigned tasks
        </p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <ul className="flex gap-8">
          <li className="relative cursor-pointer pb-3 text-sm font-medium text-primary">
            All Tasks
            <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-primary" />
          </li>

          <li className="cursor-pointer pb-3 text-sm font-medium text-gray-light hover:text-gray-700">
            To Do
          </li>

          <li className="cursor-pointer pb-3 text-sm font-medium text-gray-light hover:text-gray-700">
            In Progress
          </li>

          <li className="cursor-pointer pb-3 text-sm font-medium text-gray-light hover:text-gray-700">
            Completed
          </li>
        </ul>
      </div>

      {/* Task List */}
      {tasks.map((element) => (
        <MyTasksCard key={element.id} mytasks={element} />
      ))}
    </div>
  );
};

export default MyTasks;
