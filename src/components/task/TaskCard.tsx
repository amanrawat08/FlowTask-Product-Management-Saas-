type TaskCardProps = {
  t_Name: string;
  t_Description: string;
  t_DueDate: string;
  t_Priority: string;
  t_Assignee: string;
  t_no: number;
};

const TaskCard = ({
  t_Name,
  t_Description,
  t_DueDate,
  t_Priority,
  t_Assignee,
  t_no,
}: TaskCardProps) => {
  return (
    <div className="   border border-gray-100 m-2 p-2  bg-white rounded">
      <p className="font-semibold  ">Task 4</p>
      <h5 className="text-sm font-medium">{t_Name}</h5>
      <p className="text-sm text-gray-600">{t_Description}</p>
      <div className="flex items-center gap-2 mt-2">
        <div className="inline-block text-sm bg-red-500     text-white px-2 py-1 rounded">
          {t_Priority}
        </div>
        <div className="inline-block text-sm bg-blue-500 text-white px-2 py-1 rounded">
          {t_Assignee}
        </div>
      </div>
      <div className="text-sm  *:text-gray-600 mt-2 ">
        Due Date: {t_DueDate}
      </div>
    </div>
  );
};

export default TaskCard;
