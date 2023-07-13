export function timePassedSince(dateString) {
  // Convert input date string to a Date object
  const inputDate = new Date(dateString);

  // Get the difference between the input date and the current date in milliseconds
  const timeDiffMs = new Date() - inputDate;

  // Convert milliseconds to years, months, days, hours, and minutes
  const seconds = Math.floor(timeDiffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30.44);
  const years = Math.floor(months / 12);

  // Calculate remaining months after converting to years
  const remainingMonths = months % 12;

  // Create a string with the calculated time passed
  let timePassedStr = "";
  if (years > 0) {
    timePassedStr += years + " year" + (years > 1 ? "s" : "") + " and ";
  }
  if (remainingMonths > 0) {
    timePassedStr += remainingMonths + " month" + (remainingMonths > 1 ? "s" : "");
  }

  return timePassedStr;
}