function getRandom(min, max) {

  if (min < 0 || max < 0 ) {
    return NaN;
  } else {
    const lower = Math.ceil(Math.min(min,max));
    const upper = Math.floor(Math.max(min,max));
    return Math.floor(lower + Math.random() * (upper + 1 - lower));
  }
}

getRandom(1,5);

function getRandomFloat(min, max, digits) {
  if (min < 0 || max < 0 ) {
    return NaN;
  } else {
    const lower = Math.min(min,max);
    const upper = Math.max(min,max);
    return +(Math.random() * (upper - lower) + lower).toFixed(digits);
  }
}

getRandomFloat(1,5,4);
