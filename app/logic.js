// const arr1 = [1, 2, 3];
// const arr2 = [4, 5];
// const arr3 = [6, 7];
// const arr4 = [8, 9, 10, 11];

// getAllCombinations(arr1,arr2,arr3,arr4)
const getAllCombinations = (arr1,...arrays) => {
  let temp1 = arr1.map((i) => [i]);
  const combinedArr = [...arrays];
  for (let i = 0; i < combinedArr.length; i++) {
    const arr = combinedArr[i];
    let temp2 = [];
    for (let j = 0; j < temp1.length; j++) {
      const a1 = temp1[j];
      for (let k = 0; k < arr.length; k++) {
        const ele = arr[k];
        const newArr = [...a1, ele];
        temp2.push(newArr);
      }
    }
    temp1 = temp2;
  }
  return temp1;
};
export { getAllCombinations };
