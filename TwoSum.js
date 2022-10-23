

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
let arr = [2,7,11,15, 3,6]
let target = 9
for(let i = 0 ; i<arr.length-1 ; i ++){
  for(let j = i+1; j<arr.length; j++){
    if(arr[i] + arr[j] == target){
      console.log(i,j)
    }
  }
}
