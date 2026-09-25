import MyTasksCard from "../../components/MyTasks/MyTasksCard";
import TeamMembers from "./TeamMembers";

const Team = () => {
  return (
    <div className="max-w-6xl">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Team
          </h1>

          <p className="mt-1 text-sm text-gray-light">
            Manage your team members and their activity
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition hover:opacity-90">
          <span className="text-lg leading-none">+</span>
          Invite Member
        </button>
      </div>

      {/* Search & Filters */}
      <div className="mt-6 flex items-center justify-between gap-4">
        
        {/* Search */}
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search team members..."
            className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-3">
          <select className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-600 outline-none focus:border-primary">
            <option>Role</option>
            <option>Admin</option>
            <option>Manager</option>
            <option>Member</option>
          </select>

          <select className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-600 outline-none focus:border-primary">
            <option>Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
      </div>

      {/* Team Members */}
      <div className="mt-7">
        <h2 className="text-base font-semibold text-gray-900">
          Team Members
        </h2>

        <div className="mt-4 overflow-hidden rounded-xl ">
          {/* Table Header 
          <div className="grid grid-cols-12 border-b border-gray-100 bg-gray-50 px-5 py-3 text-xs font-medium uppercase tracking-wide text-gray-light">
            <div className="col-span-4">Member</div>
            <div className="col-span-2">Role</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-2">Tasks</div>
            <div className="col-span-2 text-right">Action</div>
          </div>
*/}
          {/* Member
          <div className="grid grid-cols-12 items-center px-5 py-4">
            
            <div className="col-span-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                OC
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  Olivia Carter
                </h3>

                <p className="text-xs text-gray-light">
                  olivia@example.com
                </p>
              </div>
            </div>

            <div className="col-span-2 text-sm text-gray-600">
              Designer
            </div>

            <div className="col-span-2">
              <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-600">
                Active
              </span>
            </div>

            <div className="col-span-2 text-sm text-gray-600">
              12 tasks
            </div>

            <div className="col-span-2 text-right">
              <button className="text-sm font-medium text-primary hover:underline">
                View Profile
              </button>
            </div>
          </div> */}

          <TeamMembers isHeading={false}/>
        </div>
      </div>
    </div>
  );
};

export default Team;