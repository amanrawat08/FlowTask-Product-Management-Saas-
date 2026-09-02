import RecentProject from "../../components/Dashboard/RecentProject"
import RecentTask from "../../components/Dashboard/RecentTask"
import StatCard from "../../components/Dashboard/StatCard"

const Dashboard = () => {
  return (
    <div>
      <StatCard />
      <RecentProject />
      <RecentTask/>
    </div>
  )
}

export default Dashboard
