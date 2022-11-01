
let arr = "(])"

let stack = []
for(let i = 0 ; i< arr.length; i++){
    if(arr[i] == '(' || arr[i] == '{' || arr[i] == '['){
     stack.push(arr[i])
     continue;    
    }
    if(stack.length == 0) return false
    switch(arr[i]){
        case ')':
            if (arr[i] == '}' || arr[i] == ']') return  false
    }
}



function Opt(data){
    switch(data){
        case '(' :
            return ')'
            break;
        case '{':
            return '}'
            break;
        case '[':
            return ']'
            break;
        default: ''    
                    
    }
}