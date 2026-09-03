import React from "react";
import TaskCard from "./TaskCard";

const KanbanColumn = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="  rounded-md shadow  ">
        <div className="flex items-center justify-between mb-2 border border-gray-300 p-2  rounded bg-amber-300 shadow">
          <h3 className="text-lg font-semibold   ">To Do</h3>
          <span className="inline-block bg-primary text-white px-2 py-0 rounded">
            4
          </span>
        </div>
        <TaskCard
          t_Name="Add Task Filtering"
          t_Description="Implement filtering tasks by priority, status, and assignee"
          t_DueDate="Sep 18"
          t_Priority="Medium"
          t_Assignee="Priya"
          t_no={4}
        />
        <TaskCard
          t_Name="Create Dashboard"
          t_Description="Build the main dashboard with task statistics and user information"
          t_DueDate="Sep 15"
          t_Priority="Medium"
          t_Assignee="Ankit"
          t_no={3}
        />
      </div>
      <div className="  rounded-md shadow">
        <div className="flex items-center justify-between mb-2 border border-gray-300 p-2  rounded bg-blue-300 shadow">
          <h3 className="text-lg font-semibold   ">In Progress</h3>
          <span className="inline-block bg-primary text-white px-2 py-0 rounded">
            2
          </span>
        </div>
        <TaskCard
          t_Name="Setup Database"
          t_Description="Configure the database and create the required user tables"
          t_DueDate="Sep 12"
          t_Priority="High"
          t_Assignee="Rahul"
          t_no={2}
        />
      </div>
      <div className="  rounded-md shadow">
        <div className="flex items-center justify-between mb-2 border border-gray-300 p-2  rounded bg-green-300 shadow">
          <h3 className="text-lg font-semibold   ">Done</h3>
          <span className="inline-block bg-primary text-white px-2 py-0 rounded">
            1
          </span>
        </div>

        <TaskCard
          t_Name="Design Login Page"
          t_Description="Create a responsive login page with email and password fields"
          t_DueDate="Sep 10"
          t_Priority="High"
          t_Assignee="Divyam"
          t_no={1}
        />

        <TaskCard
          t_Name="Test User Authentication"
          t_Description="Testing user authentication functionality"
          t_DueDate="Sep 21"
          t_Priority="High"
          t_Assignee="Divyam"
          t_no={5}
        />
      </div>
    </div>
  );
};
{
}

export default KanbanColumn;
