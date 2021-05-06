const list = [90, 32, 43, 11, 555, 333, 2222, 645, 66, 33, 22, 66, 7677, 555, 222]

const result = list.reduce((acc, current, index, array) => {
  if (array.indexOf(current) != index && !acc.includes(current)) acc.push(current);
  return acc;
}, [])

console.log(result)

// I used the reduce method here to find the duplicates. The if statement checks
// if the indexOf of the current iterator is diferent than the index of the iteration
// and if the current iterator is not in the accumulator already, if both true
// it puts the current iterator in the accumulator. Than at the end it returns
// the accumulator with all the duplicates  

