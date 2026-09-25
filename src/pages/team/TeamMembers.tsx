import {   useNavigate } from "react-router-dom"
import { profileData } from "../../store"

const TeamMembers = ({isHeading = true}) => {
    const navigate = useNavigate();
  return (
    <div>
        {isHeading && <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold">Team Members</h4>
            <button className="btn bg-primary text-white   p-1 border rounded text-sm">Invite Member</button>
        </div>}

        {/* team member cards */}
        <div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-3 gap-4">
            {profileData.map((member) => (
                <div key={member.id} className="bg-white p-4 rounded shadow">
                    <div className="flex items-center gap-4 mb-2">
                        <img src={member.avatar} alt={member.name} className="w-12 h-12 rounded-full" />
                        <div>
                            <h5 className="text-md font-semibold">{member.name}</h5>
                            <p className="text-sm text-gray-500">{member.role}</p>
                        </div>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">{member.email}</p>
                    <div className="flex items-center gap-4">
                        <span className={`text-sm font-semibold ${member.status === "online" ? "text-green-500" : member.status === "away" ? "text-yellow-500" : "text-gray-500"}`}>
                            {member.status.charAt(0).toUpperCase() + member.status.slice(1)}
                        </span>
                        <span className="text-sm text-gray-500">{member.statistics.projects} Projects</span>
                        <span className="text-sm text-gray-500">{member.statistics.tasks} Tasks</span>
                    </div>
                    <div className="mt-2 text-xs underline font-medium cursor-pointer text-primary" onClick={()=>navigate(`${member.id}`)}> View Profile</div>
                </div>
            ))}
        </div> 
         
    </div>
  )
}

  

export default TeamMembers
