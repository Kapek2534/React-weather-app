export function formatDate(rawDate) {
  if (!rawDate) return "";

  const dateObj = new Date(rawDate);

  return dateObj.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function formatWeekday(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    weekday: "short",
  });
}

export function formatHour(date) {
  return new Date(date).toLocaleTimeString("en-US", {
    hour: "2-digit",
  });
}
