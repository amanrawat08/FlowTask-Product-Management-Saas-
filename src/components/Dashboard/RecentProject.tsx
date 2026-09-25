const RecentProject = () => {
  return (
    <div className="card w-full rounded-md bg-white p-5 shadow-sm shadow-gray-50 mt-6" >
        <h2 className="heading  font-bold mt-2   ">Recent Project</h2>
        <hr className="my-2 text-gray-300"  />

        <div className="overflow-x-auto">
            <table className="table w-full"> 
                <tbody>
                    <tr>
                        <td className="font-medium">E-commerce Website</td>
                        <td className="text-center">72%</td> 
                    </tr>
                    <tr>
                        <td className="font-medium">Job Portal</td>
                        <td>40%</td> 
                    </tr>
                    <tr>
                        <td className="font-medium">Task Management App</td>
                        <td>60%</td> 
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default RecentProject
