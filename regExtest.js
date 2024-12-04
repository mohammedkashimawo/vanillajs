//some interview questions on use of regEx/

//Write a regex pattern to match a string that starts with “abc” and ends with “xyz”
words="h hj usbsbvbff  bhjsjbjbnsj   u jshggg   lppl"
let start='abc'
let end='xyx'
console.log(words.match(/^abc.*xyz$/))

//. Write a regex to match a string that contains exactly three consecutive vowels.


console.log(words.match(/[aeiou]{3}/gi))

// Construct a regex to match a string that starts with a capital letter and ends with a period.ed mojjeasy@gmail.com
//to match only words-----[w]..also only digit is given as [d]

let cde= /\[w](@domain.com)$/


//use of character cases elaborated

///match a 4 didigt number in the below

const randomData = "015 354 8787 687351 3512 8735";

let regexl= /\d{4}/g
console.log(regexl.test(randomData))



//Write a regular expression to validate a US phone number in the format (XXX) XXX-XXXX, where X is a digit.
