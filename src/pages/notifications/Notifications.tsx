import NotificationItem from "../../components/NotificationItem";

const Notifications = () => {
  return (
    <div className="  mt-4 w-full bg-white  p-4">
      <div className="flex justify-between mb-5 items-center">
        <h1 className="text-2xl font-bold mt-2 pl-1 mb-3 text-primary ">Notification</h1>
        <button className="btn btn-primary bg-primary text-white py-1 px-3 rounded cursor-pointer">Mark All as Read</button>
      </div>
      <NotificationItem
        avatar="OC"
        name="Olivia Carter"
        message='Assigned you a new task "Design Payment UI"'
        time="10 minutes ago"
        unread
      />

      <NotificationItem
        avatar="EW"
        name="Ethan Wilson"
        message='Moved "Authentication" to In Progress'
        time="1 hour ago"
        unread
      />

      <NotificationItem
        avatar="SM"
        name="Sophia Martinez"
        message="Added you to E-Commerce Website"
        time="Yesterday"
      />

      <NotificationItem
        avatar="NA"
        name="Noah Anderson"
        message='Completed task "API Integration"'
        time="Yesterday"
      />
    </div>
  );
};

export default Notifications;
