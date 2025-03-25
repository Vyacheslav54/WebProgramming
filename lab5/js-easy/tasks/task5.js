function countOccurrences(str, char) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }

    return count;
}

console.log(countOccurrences("hello world", 'o')); 
console.log(countOccurrences("banana", 'a'));     
console.log(countOccurrences("abcdef", 'z'));      
console.log(countOccurrences("", 'a'));             

module.exports = countOccurrences;
