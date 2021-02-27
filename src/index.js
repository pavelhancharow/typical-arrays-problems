
exports.min = function min(array) {
  return Array.isArray(array) && array.length ? Math.min(...array) : 0;
}

exports.max = function max(array) {
  return Array.isArray(array) && array.length ? Math.max(...array) : 0;
}

exports.avg = function avg(array) {
  if ((Array.isArray(array) && array.length)) {
    const result = array.reduce((acc, item) => acc += item);
    return result / array.length;
  } else {
    return 0;
  }
}
