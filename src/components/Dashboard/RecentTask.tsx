 
const RecentTask = () => {
  return (
     <div className="card w-full rounded-md bg-white p-5 shadow-sm shadow-gray-50 mt-6" >
        <h2 className="heading font-bold mt-2   ">Recent Task</h2>
        <hr className="my-2 text-gray-300"  />

        <div className="overflow-x-auto">
            <table className="table w-full"> 
                <tbody>
                    <tr className="   ">
                        <td className="font-medium">Build login page</td>
                        <td className="text-center">In Progress</td> 
                    </tr>
                    <tr>
                        <td className="font-medium">Create database schema</td>
                        <td className="text-center">Todo</td> 
                    </tr>
                    <tr>
                        <td className="font-medium">Fix navbar bug</td>
                        <td className="text-center">Done</td> 
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default RecentTask
