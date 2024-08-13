function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const bufferView = new Int8Array(buffer);

  if (position >= length) {
    throw new Error('Position outside range');
  } else bufferView[position] = value;

  return new DataView(buffer);
}

export default createInt8TypedArray;
