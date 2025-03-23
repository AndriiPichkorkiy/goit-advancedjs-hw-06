/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  Mon, Tue, Wed, Thu, Fri, Sat, Sun
}

function isWeekend(day: Days): boolean {
  return day === Days.Sat || day === Days.Sun
}