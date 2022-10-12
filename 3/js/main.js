function getRandom(min, max) {

  if (min < 0 || max < 0 || typeof(min) !== 'number' || typeof(max) !== 'number') {
    return NaN;
  } else if (min >= 0 && max >= 0) {
    const lower = Math.ceil(Math.min(min,max));
    const upper = Math.floor(Math.max(min,max));
    if (lower === upper) {
      return lower;
    } else if (lower > upper) {
      return NaN;
    } else {
      return Math.floor(lower + Math.random() * (upper + 1 - lower));
    }
  } else {
    return NaN;
  }
}

getRandom();

function getRandomFloat(min, max, digits) {
  if (min < 0 || max < 0 || typeof(min) !== 'number' || typeof(max) !== 'number' || typeof(digits) !== 'number' || digits < 0 || digits > 100 || Math.ceil(digits) !== Math.floor(digits) ) {
    return NaN;
  } else {
    const lower = Math.min(min,max);
    const upper = Math.max(min,max);
    return +(Math.random() * (upper - lower) + lower).toFixed(digits);
  }
}

getRandomFloat();
