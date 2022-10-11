let min;
let max;
let digits;
let lower = Math.min(min,max);
let upper = Math.max(min,max);

let getRandom = (lower>=0 && upper>=0)
  ? Math.floor(lower + Math.random() * (upper + 1 - lower))
    : (upper=lower && upper>=0 && lower>=0)
     ? Math.floor(upper)
        : NaN;

console.log(getRandom)

let getRandomFloat = (lower<0 || upper<0 || digits<0)
  ? NaN
    : +(Math.random() * (upper - lower) + lower).toFixed(digits);

console.log(getRandomFloat)
