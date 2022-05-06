function isPalindromeShort(str){
    return str === str.split("").reverse().join("");
}

function isPalindrome(str){
    let tmp = "";

    for (let i = (str.length -1); i >= 0; i--){
        tmp += str[i]
    }
    return str === tmp;
}


let string = "annali";
let strTry = "ottetto";

console.log(isPalindromeShort(string));
console.log(isPalindrome(string));


console.log(isPalindromeShort(strTry));
console.log(isPalindrome(strTry));