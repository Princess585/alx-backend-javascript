export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments(obj) {
      let count = 0;
      for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
          count += 1;
        }
      }
      return count;
    },
  };
}
