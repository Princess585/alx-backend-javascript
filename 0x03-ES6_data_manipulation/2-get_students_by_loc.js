function getStudentsByLocation(students, city) {
  if (Array.isArray(students)) {
    return students.filter((item) => item.location === city);
  } return [];
}

export default getStudentsByLocation;
