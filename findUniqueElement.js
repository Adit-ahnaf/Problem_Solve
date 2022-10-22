
// find Unique elements from an array and separated them to another array

let arr = [1, 2, 2, 3, 4, 4, 4, 5, 5,6,7,8,9,9,10,20,21,22,23,23]
let j = 1
for(let i = 0; i< arr.length - 1; i ++){
    if(arr[i] != arr[i+1]){
      arr[j] = arr[i+1]
      j++
    }
}
for (let i = 0 ; i<j; i++){
  console.log(arr[i])
}