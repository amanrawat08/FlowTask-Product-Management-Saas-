const NotificationItem:any = ({
  avatar,
  name,
  message,
  time,
  unread = false,
}) => {
  return (
    <div
      className={`flex items-start gap-4 rounded-xl border p-4 mb-2 transition ${
        unread
          ? "border-primary/20 bg-primary/5"
          : "border-border bg-white hover:bg-muted/30"
      }`}
    >
      {/* Avatar */}
      <div className="relative shrink-0">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
          {avatar}
        </div>

        {unread && (
          <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-primary" />
        )}
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-foreground">
              {name}
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              {message}
            </p>
          </div>

          <span className="shrink-0 text-xs text-muted-foreground">
            {time}
          </span>
        </div>

        <div className="mt-2">
          <span
            className={`text-xs font-medium ${
              unread ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {unread ? "• Unread" : "Read"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;