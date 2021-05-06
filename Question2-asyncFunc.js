const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const list = ['a', 'b', 'c', 'd']
let time = 1000

async function timer() {
  await sleep(time);
}

const asyncFunc = async () => {
  for (const i of list) {
    await timer()
    console.log(i);
    time = time * 2;
    console.log(time);
  }
  time = 1
}

asyncFunc()

// First I created a function to make a promise with setTimeout, than the function 
// that will make the other function sleep when its called. The way it works is 
// each interation of the for loop will call the timer which is set at 1 second at
// first, than print the iterator and mutiply the time variable by 2 which will,
// make the next timer call takes twice as long. 