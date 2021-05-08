const list = [90, 32, 43, 11, 555, 555, 333, 2222, 645, 33, 22, 66, 66, 7677, 222]

function findDuplicate(arr) {
  // to reduce operational complexity first I created a object that list all the 
  // unique numbers and count their frequency, than it iterates through the object 
  // appending to an array any key thats has a value greater than 1.
  let hash = {}
  let result = []

  arr.forEach(element => {
    if (Number.isInteger(hash[element])) {
      hash[element] += 1
    } else {
      hash[element] = 1
    }
  })

  for (item in hash) {
    if (hash[item] > 1) {
      result.push(item)
    }
  }
  return result
}

console.log(findDuplicate(list))


// old answer


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