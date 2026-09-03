import { useState } from "react";
import KanbanColumn from "../../components/task/KanbanColumn";
import TaskModal from "../../components/task/TaskModal";
import { X } from "lucide-react";

const KanbanBoard = () => {
  const [model, setModel] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold mb-2">Kanban Board</h2>
        <button
          className="bg-primary text-white px-4 py-1 rounded-md hover:bg-primary-dark transition-colors cursor-pointer"
          onClick={() => setModel(true)}
        >
          Add Task
        </button>
      </div>

      <div
        className={`fixed inset-0   h-full  z-50 flex items-center justify-center ${model ? "block" : "hidden"}`}
      >
        <div className="w-full relative bg-white h-full overflow-y-auto scrollbar-track-gray-200 scrollbar-thin p-4 rounded-md shadow-md    max-w-lg">
          <TaskModal />
          <X className="cursor-pointer absolute top-4 right-4" onClick={() => setModel(false)} />
        </div>
      </div>

      <KanbanColumn />
    </div>
  );
};

export default KanbanBoard;
