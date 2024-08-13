export default function getListStudentsIds(list) {
  if (Array.isArray(list)) {
    return list.map((item) => item.id);
  } return [];
}
