 
const MyTasksCard = ({mytasks}) => {
  return (
    <div className="mt-5 space-y-3">

        {/* Task Card */}
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-gray-300 hover:shadow-md">
          
          {/* Top Row */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h4 className="text-[15px] font-semibold text-gray-900">
                {mytasks.title}
              </h4>

              <p className="mt-1 text-sm text-gray-light">
                {mytasks.project}
              </p>
            </div>

            {/* Priority */}
            <div className="flex items-center gap-1.5 rounded-full bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-600">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
              {mytasks.priority}
            </div>
          </div>

          {/* Bottom Row */}
          <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
            
            <div className="flex items-center gap-2 text-xs text-gray-light">
              <span>Due</span>
              <span className="font-medium text-gray-700">
                {mytasks.dueDate}
              </span>
            </div>

            {/* Status */}
            <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600">
              {mytasks.status}
            </span>
          </div>
        </div>

      </div>
  )
}

export default MyTasksCard
