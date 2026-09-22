import { useParams } from "react-router-dom";
import { profileData } from "../../store";
 

const Profile = () => {
  const { member_id } = useParams
  <{ member_id: string }>();

  const team_detail = profileData.filter(data => data.id == Number(member_id));
  console.log(team_detail);
  
  return (
    <div className="card w-full rounded-md bg-white p-5 shadow-sm shadow-gray-200 flex gap-4 items-start">
        <div className="w-[25%] border border-gray-100 p-2">
          <div className="flex items-center justify-center  ">
              <img src="/profilepic.jpg" alt="Profile Picture" className="rounded  h-32 object-contain bg-black  " />

          </div>
          <div className="mt-4">
            <h5 className="text-lg font-bold text-primary mb-1">Skills</h5>
            <ul className="flex gap-2  skills flex-wrap ">
              <li className="bg-blue-100 px-2 border border-gray-100 rounded-sm text-sm">Html</li>
              <li className="bg-blue-100 px-2 border border-gray-100 rounded-sm text-sm">Css</li>
              <li className="bg-blue-100 px-2 border border-gray-100 rounded-sm text-sm">Javascript</li>
              <li className="bg-blue-100 px-2 border border-gray-100 rounded-sm text-sm">Reactjs</li>
              <li className="bg-blue-100 px-2 border border-gray-100 rounded-sm text-sm">Redux</li>
              <li className="bg-blue-100 px-2 border border-gray-100 rounded-sm text-sm">Express</li>
              <li className="bg-blue-100 px-2 border border-gray-100 rounded-sm text-sm">Nodejs</li>
            </ul>
          </div>
        </div>
        <div className="w-[70%]  "> 
          <div className="h-32 pt-5">
              <h4 className="text-3xl font-semibold">{team_detail[0]?.name}</h4>
              <p className="text-sm text-primary font-semibold ">{team_detail[0]?.role}</p>
              <p className="text-sm text-gray-500">{team_detail[0]?.email}</p>
              <p className="text-sm text-gray-500">{team_detail[0]?.location}</p>
          </div>
          <div className="mt-4">
            
            <h5 className="text-xl font-bold text-lg font-bold text-primary mb-1">Recent Activities</h5>
            <div>
              <p>Build Ui of the project</p>
              <p>Build Backend of the project</p>
            </div>
            <h5 className="heading text-lg font-bold text-primary mb-1 mt-3">About</h5>
            <div className="about ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis amet consequuntur placeat deleniti fuga repudiandae non numquam fugit quod voluptate natus perferendis praesentium tenetur dolorum aliquam ipsum ratione enim a, expedita nam molestiae possimus. Quisquam repudiandae tempore nobis exercitationem repellat.
            </div>
          </div>
        </div>

    </div>
  )
}

export default Profile
