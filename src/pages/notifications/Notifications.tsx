import NotificationItem from "../../components/NotificationItem";

const Notifications = () => {
  return (
    <div>
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
