/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum days {
  Mon, Tue, Wed, Thu, Fri, Sat, Sun
}

function isWeekend(day: days): boolean {
  return day === days.Sat || day === days.Sun
}