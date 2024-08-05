export default function createIteratorObject(report) {
  const employees = [];

  for (const key in report.allEmployees) {
    if (Object.hasOwnProperty.call(report.allEmployees, key)) {
      employees.push(...report.allEmployees[key]);
    }
  }

  return employees;
}
