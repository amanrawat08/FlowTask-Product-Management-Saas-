
import { useParams } from "react-router-dom";
import { profileData } from "../../store";

const Profile = () => {
  const { member_id } = useParams<{ member_id: string }>();

  const team_detail = profileData.find(
    (data) => data.id === Number(member_id),
  );

  if (!team_detail) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Member not found
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            The requested team member does not exist.
          </p>
        </div>
      </div>
    );
  }

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Express",
    "Node.js",
  ];

  return (
    <div className="w-full space-y-5">
      {/* Profile Header */}
      <div className="overflow-hidden rounded-xl bg-white shadow-sm shadow-gray-200">
        {/* Cover */}
        <div className="h-28 bg-gradient-to-r from-primary to-emerald-500" />

        {/* Profile Information */}
        <div className="relative px-6 pb-6">
          {/* Avatar */}
          <div className="absolute -top-14 left-6">
            <div className="relative">
              <img
                src="/profilepic.jpg"
                alt="Profile Picture"
                className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-md"
              />

              {/* Online indicator */}
              <span className="absolute bottom-2 right-2 h-4 w-4 rounded-full border-2 border-white bg-green-500" />
            </div>
          </div>

          <div className="ml-36 flex flex-col justify-between gap-4 pt-5 md:flex-row">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                {team_detail.name}
              </h1>

              <p className="mt-1 text-sm font-semibold text-primary">
                {team_detail.role}
              </p>

              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500">
                <span>{team_detail.email}</span>
                <span>{team_detail.location}</span>
              </div>
            </div>

            <div className="flex h-fit items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-sm font-medium text-green-700">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Online
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {/* Left Column */}
        <div className="space-y-5 lg:col-span-1">
          {/* Skills */}
          <div className="rounded-xl bg-white p-5 shadow-sm shadow-gray-200">
            <h2 className="mb-4 text-lg font-bold text-gray-800">
              Skills
            </h2>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-primary/10 bg-primary/5 px-3 py-1.5 text-sm font-medium text-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="rounded-xl bg-white p-5 shadow-sm shadow-gray-200">
            <h2 className="mb-4 text-lg font-bold text-gray-800">
              Contact Information
            </h2>

            <div className="space-y-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                  Email
                </p>
                <p className="mt-1 break-all text-sm text-gray-700">
                  {team_detail.email}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                  Location
                </p>
                <p className="mt-1 text-sm text-gray-700">
                  {team_detail.location}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                  Role
                </p>
                <p className="mt-1 text-sm text-gray-700">
                  {team_detail.role}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-5 lg:col-span-2">
          {/* Statistics */}
          <div className="rounded-xl bg-white p-5 shadow-sm shadow-gray-200">
            <h2 className="mb-4 text-lg font-bold text-gray-800">
              Statistics
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
                <p className="text-sm text-gray-500">Total Tasks</p>
                <p className="mt-2 text-2xl font-bold text-gray-800">
                  {team_detail.statistics?.tasks}
                </p>
              </div>

              <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
                <p className="text-sm text-gray-500">Completed</p>
                <p className="mt-2 text-2xl font-bold text-primary">
                  {team_detail.statistics?.completed}
                </p>
              </div>

              <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
                <p className="text-sm text-gray-500">Projects</p>
                <p className="mt-2 text-2xl font-bold text-gray-800">
                  {team_detail.statistics?.projects}
                </p>
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="rounded-xl bg-white p-5 shadow-sm shadow-gray-200">
            <h2 className="mb-5 text-lg font-bold text-gray-800">
              Recent Activities
            </h2>

            <div className="space-y-5">
              <div className="flex gap-3">
                <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />

                <div>
                  <p className="text-sm font-medium text-gray-800">
                    Built UI of the project
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    2 hours ago
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />

                <div>
                  <p className="text-sm font-medium text-gray-800">
                    Built backend of the project
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    Yesterday
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />

                <div>
                  <p className="text-sm font-medium text-gray-800">
                    Completed project task
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    2 days ago
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="rounded-xl bg-white p-5 shadow-sm shadow-gray-200">
            <h2 className="mb-3 text-lg font-bold text-gray-800">
              About
            </h2>

            <p className="text-sm leading-6 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis amet consequuntur placeat deleniti fuga repudiandae
              non numquam fugit quod voluptate natus perferendis praesentium
              tenetur dolorum aliquam ipsum ratione enim a, expedita nam
              molestiae possimus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
 
