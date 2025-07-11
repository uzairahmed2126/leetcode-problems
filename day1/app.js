var setZeroes = function (matrix) {
  let ind = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        ind.push(j);
      }
      if (matrix[i].includes(0)) {
        matrix[i][j] = 0;
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < ind.length; j++) {
      matrix[i][ind[j]] = 0;
    }
  }
};
console.log(
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);
console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
);
