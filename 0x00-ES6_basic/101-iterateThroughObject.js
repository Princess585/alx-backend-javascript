export default function iterateThroughObject(reportWithIterator) {
  const array = reportWithIterator;
  let str = '';

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] !== '') {
      if (str === '') {
        str += array[i];
      } else if (i === array.length - 1) {
        str += ` | ${array[i]}`;
      } else {
        str += ` | ${array[i]} `;
      }
    }
  }

  return str;
}
