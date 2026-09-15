import { useParams } from "react-router-dom";
import { profileData } from "../../store";
 

const Profile = () => {
  const { member_id } = useParams
  <{ member_id: string }>();

  const team_detail = profileData.filter(data => data.id == Number(member_id));
  console.log(team_detail);
  
  return (
    <div>
      <h1>Profile Page</h1>
      <p>This is the profile page.</p>
      <div>
        
        
      </div>
    </div>
  )
}

export default Profile
