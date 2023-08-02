export default function getFormatDate(oldDateString: string) {
  // Create a Date object from the old date string
  const oldDate: Date = new Date(oldDateString);

  // Helper functions to get the ordinal suffix and month name
  function getOrdinalSuffix(number: number): string {
    const suffixes: string[] = ["st", "nd", "rd"];
    const index: number = (number % 10) - 1;
    return suffixes[index] || "th";
  }

  function getMonthName(monthIndex: number): string {
    const monthNames: string[] = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthNames[monthIndex];
  }

  // Format the date to "1st August, 2023"
  const formattedDate: string = `${oldDate.getDate()}${getOrdinalSuffix(
    oldDate.getDate()
  )} ${getMonthName(oldDate.getMonth())}, ${oldDate.getFullYear()}`;

  return formattedDate;
}
