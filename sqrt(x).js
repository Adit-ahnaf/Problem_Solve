// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

function sqrtx(x){
let i  = 1 ;
let res = 1;

if(x == 1 || x == 0) return x 
 while(res <= x){
    i ++ 
    res = i * i 
 }
  return  (i - 1)

}

console.log(sqrtx(64))