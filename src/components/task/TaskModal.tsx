const TaskModal = () => {
  return (
    <div>
      <div className="flex gap-1 mb-2">
        <span className="text-primary font-bold">|</span>
        <h1 className="text-lg font-semibold text-gray-900">Create New Task</h1>
      </div>

      <form action="">
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Task Title
          </label>
          <input
            type="text"
            id="title"
            className="mt-1 block p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary  "
            placeholder="Enter task title"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            rows={3}
            className="mt-1 block p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            placeholder="Enter task description"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-700"
          >
            Status
          </label>
          <select
            id="status"
            className="mt-1 block p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary :placeholder-gray-400 :placeholder-p-2"
          >
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="assignee"
            className="block text-sm font-medium text-gray-700"
          >
            Assignee
          </label>
          <select
            id="assignee"
            className="mt-1 block p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary :placeholder-gray-400 :placeholder-p-2"
          >
            <option value="aman">Aman</option>
            <option value="rahul">Rahul</option>
            <option value="divyam">Divyam</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="priority"
            className="block text-sm font-medium text-gray-700"
          >
            Priority
          </label>
          <select
            id="priority"
            className="mt-1 block p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary :placeholder-gray-400 :placeholder-p-2"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="dueDate"
            className="block text-sm font-medium text-gray-700"
          >
            Due Date
          </label>
          <input
            type="date"
            id="dueDate"
            className="mt-1 block p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary :placeholder-gray-400 :placeholder-p-2"
          />
        </div>
        <div className="mb-4"></div>
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors cursor-pointer"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default TaskModal;
