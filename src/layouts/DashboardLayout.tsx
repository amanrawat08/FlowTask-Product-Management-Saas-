import { Outlet } from "react-router-dom"
import Header from "../components/layouts/Header"
import Sidebar from "../components/layouts/Sidebar"

  
 
const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
        <div className="flex *:h-screen bg-background ">
            <Sidebar />
            <div className="flex flex-1 flex-col bg-background">
                <Header />
                <div className="p-4">
                    <Outlet/>
                </div>
            </div>
        </div>
    </div>
  )
}
       
export default DashboardLayout
