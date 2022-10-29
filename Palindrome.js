// return true if a number is palindrome else return false
let a = 1000021;
let b = a
let rev = 0;
while (b != 0) {
  rev = rev * 10 + (b % 10)
  b = Math.floor(b / 10)
}
if (a == b) return true;
else false