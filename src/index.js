/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let result = 0; // your implementation
  let length = preferences.length;
  for(let i = 0; i < length; i++) { 
    let a = preferences[i] - 1;
    let b = preferences[a] - 1;
    let c = preferences[b] - 1;
      if (a !== b && b !== c && c === i) {
        result++;
      }
}
return result / 3;
}