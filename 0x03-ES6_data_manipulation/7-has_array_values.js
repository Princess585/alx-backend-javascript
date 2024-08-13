export default function hasValuesFromArray(set, arr) {
  let isPresent = false;

  for (const i of arr) {
    isPresent = set.has(i);

    if (!isPresent) {
      return false;
    }
  }

  return true;
}
