
const playList = ['cure', 'the stroked', 'shakira', 'beatles']
let currentBand = 0;

const wrapInt = (min, max, val) => {
  console.log(val)
  return val < min ? max : 
  val > max ? min :
  val
}

const wrapIndex = wrapInt.bind(null, 0, playList.length - 1);

function nextBand() {
  console.log(wrapIndex(currentBand++));
  currentBand = wrapIndex(currentBand++)
}

nextBand();
