function calculateNumber(type, a, b) {
  A = Math.round(a);
  B = Math.round(b);

  switch (type) {
    case 'SUM':
      return A + B;
    case 'SUBTRACT':
      return A - B;
    case 'DIVIDE':
      return B !== 0 ? A / B : 'Error';
    default:
      return 'Error';
  }
}

module.exports = calculateNumber;
