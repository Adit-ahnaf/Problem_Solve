let a  = '11'
let b = '1'

function fnd (a, b){
let i = a.length - 1;
let j = b.length - 1;
let sum;
let carry = 0;
let res = '';
while(i >= 0 || j >= 0){
 sum = carry
 if( i >= 0 ) sum += a[i] - '0'
 if( j >= 0 ) sum += b[j] - '0'
 
 res  = res + (sum % 2)
 res.toString()
 carry = sum / 2
 i--, j--

}

if(carry != 0 ) res += '1';

res = res.split("").reverse().join("");

return res
}

console.log(fnd(a, b))


