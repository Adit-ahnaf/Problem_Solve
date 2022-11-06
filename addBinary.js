let a  = '1010'
let b = '1011'

function fnd (a, b){
let i = a.length - 1; //0
let j = b.length - 1;//1
let sum;
let carry = 0;
let res = '';
while(i >= 0 || j >= 0){
 sum = carry //0
 if( i >= 0 ) sum += a[i] - '0' // 0
 if( j >= 0 ) sum += b[j] - '0'//1
 //s - 1
 res  = res + (sum % 2)//0 + 1 --- 1
 res.toString()
 carry = Math.floor(sum / 2)
 i--, j--

}

if(carry != 0 ) res += '1';

// res = res.split("").reverse().join("");

return res
}

console.log(fnd(a, b))


