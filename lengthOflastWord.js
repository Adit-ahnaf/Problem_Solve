// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

let strng = "   fly me   to   the moon  ";
let remspce = strng.trim().split(" ")
console.log(remspce[remspce.length-1].length)


