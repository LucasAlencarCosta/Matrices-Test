export const formatEmailDate = (date: number): string => {
  const dateObj = new Date(date);
  const today = new Date();
  const isToday =
    dateObj.getDate() === today.getDate() &&
    dateObj.getMonth() === today.getMonth() &&
    dateObj.getFullYear() === today.getFullYear();

  if (isToday) {
    return dateObj.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  }

  return dateObj.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
};

export const formatDetailedEmailDate = (date: number): string => {
  const dateObj = new Date(date);
  const now = new Date();
  const diffInMs = now.getTime() - dateObj.getTime();
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInDays / 365);

  // Less than 48 hours - show day and time with hours ago
  if (diffInHours < 48) {
    const dayTimeFormat = dateObj.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    return `${dayTimeFormat} (${diffInHours} hour${
      diffInHours !== 1 ? "s" : ""
    } ago)`;
  }

  // More than 48 hours but less than a month
  if (diffInDays < 30) {
    const days = diffInDays;
    return `${days} day${days !== 1 ? "s" : ""} ago`;
  }

  // More than a month but less than a year
  if (diffInMonths < 12) {
    return `${diffInMonths} month${diffInMonths !== 1 ? "s" : ""} ago`;
  }

  // More than a year
  return `${diffInYears} year${diffInYears !== 1 ? "s" : ""} ago`;
};
