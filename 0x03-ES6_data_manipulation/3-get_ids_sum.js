export default function getStudentIdsSum(list) {
  if (Array.isArray(list)) {
    return list.reduce((total, value) => total + value.id, 0);
  } return [];
}
