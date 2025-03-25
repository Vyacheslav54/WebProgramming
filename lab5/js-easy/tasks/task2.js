function reverseWithoutNumbers(str) {
    let letters = [];

    for (let i = 0; i < str.length; i++) {
        if (!(str[i] >= '0' && str[i] <= '9')) {
            letters.push(str[i]);
        }
    }

    let result = "";
    for (let i = letters.length - 1; i >= 0; i--) {
        result += letters[i];
    }

    return result;
}

console.log(reverseWithoutNumbers("hello123world456")); 
console.log(reverseWithoutNumbers("abc123xyz"));       
console.log(reverseWithoutNumbers("abc123def"));     
console.log(reverseWithoutNumbers("hello5world"));   
console.log(reverseWithoutNumbers("123"));         
console.log(reverseWithoutNumbers(""));            

module.exports = reverseWithoutNumbers;
