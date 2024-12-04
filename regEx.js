let abc ="can i have a word with you";
console.log(abc.search(/Word/i))
//this will return 13

//the  global match identifier
let bcd= 'we must make sure we write a clean code today'
console.log(abc.search(/we/g))

const regex = /in/g;
const str = "The rain in Spain stays mainly in the plain";
let match;

while ((match = regex.exec(str)) !== null) {
  console.log(`Found: ${match[0]} at index ${match.index}`);
}
// Output:
// Found: in at index 4
// Found: in at index 14
// Found: in at index 38
// Found: in at index 52


const words= "apple , mango ,  banana, cashew, orange, tangerine, rice, water, english, matter"
//lets us say we want to search for all places 'r' exist. this means we search globally

var regEx = /r/g
//this means we want to search all for existence of r in  the  words, globally
let chief;
 chief = words.search(regEx)//this will only return the index first existence of r
 let cde= words.match(regEx)//this will return an arrange of all words containing r
 console.log(chief)
 console.log(cde)

 //incase you need the  number of times this exist , well, just find the length of the array cde
 console.log(cde.length)

 //note that if the words were in array, all you need is to just convert the array to string first


 //case insentive searching with i
var abs;
abs= /apple/i
console.log(words.match(abs))


const tr = `Hello World
Welcome to the jungle`;
const reg = /$welcome/i;  // Multiline flag with case-insensitive matching
console.log(str.match(regex));  // Output: ["Welcome"]


//the use of /s modifier  incase words are splitted by line , we can use the (.) to aceess them

const sttr = "Hello\nWorld";
const retgex = /hello.world/s;  // Dotall flag
console.log(retgex.test(sttr));  // Output: true


//y modifier






const stry = "Hello World";
const regexy = /world/y;  // Sticky flag
console.log(regexy.exec(stry));  // Output: null (because regex is looking for 'world' at the beginning of string)
regexy.lastIndex = 6;  // Move the starting position to 'World'
console.log(regexy.exec(str));  // Output: ["World"]


//all the modifiers can also be combined and usedat the same time


const stru = "Hello world\nhello World";
const regexu = /hello/i;  // Case insensitive
console.log(stru.match(regexu));  // Output: ["Hello"]

const regexGlobal = /hello/gim;  // Global, multiline, and case-insensitive
console.log(stru.match(regexGlobal));  // Output: ["Hello", "hello"]


//the test( )

var countries ="germany,england, brazil, taiwan, portugal, china, japan"
let tester=  /brazil/g

console.log(tester.test(countries))
//the  exec( )..this cheecks for the existence of the pattern and then returns an array with
// each element placed at the position of occurence of the pattern

let executer =/england/g
console.log(executer.exec(countries))


//the match()
var hust =/ \b\w{6}\b/g//this means we want to find words that are only 6 letters long
console.log(countries.match(hust))//so it is safe to say that this only returns the  array of all existences of pattern
//take note of how we used the word length searcher


//with replace method() we can replace all the the existence of the set patternas shown below
var today = /\b\w{7}\b/g
console.log(countries.replace(today,"fuck"))//this replaces all the elements in the countries that are of length 7 by fuck


const stri = "apple,banana,grapes";
const result = stri.split(/ii/);
console.log(result); // ["apple", "banana", "grapes"]

//with matchAll()  and some other matchers we can check for the existence of digits too

const help = "I have 2 apples and 3 oranges";
const regt = /(\d+)/g;
for (const match of help.matchAll(regt)) {//this  means check for existence of digits that are more than one 
    /*
    the matchall( )  is used to n check for allexistence and returns them  ..let 
    */
  console.log(match[0]);  // 2, 3
}
//lets say we want to return all the   countries thatare just 6 digits  ..while match() returns an array, this returnsa loop


dojo=countries.matchAll(hust)//this checks all countries to match if hust is contained

for (a  of dojo)
//console.log(countries.matchAll(hust)){
{
    console.log(a)
}


//using character classes in  regEx

/**
 * 
 * Character classes allow you to define a set of characters that you want to match.

[abc]: Matches any one of the characters "a", "b", or "c".
[^abc]: Matches any character except "a", "b", or "c".
\d: Matches any digit (0-9).
\D: Matches any non-digit.
\w: Matches any single word character (letters, digits, and underscores).
\W: Matches any non-word character.
\s: Matches any whitespace character (spaces, tabs, newlines).
\S: Matches any non-whitespace character.
javascript
Copy code

 */
let wordts= `
"You can genera67te a l67orem ips67um t9ext with words that contain numbers by modifying the standard lorem ipsum template or by creating a custom one.
 Here's an example of how you can generate a simple lorem ipsum text containing words with numbers using JavaScript"`
var yaj = /[abc]/g
console.log(wordts.match(yaj))//it shows all the positions and the existing pattern
console.log(yaj.exec(wordts))
let non=/[^abcdef]/g
console.log(wordts.match(non))
console.log(non.exec(wordts))
console.log(wordts.match(/\d/g))
console.log(wordts.match(/\D/g))
console.log(wordts.match(/\w/g))
console.log(wordts.match(/\W/g))

//the anchors in regex ^ and $
/**
 * these are basically used to indicate where your search should come from
 * ^- this means starting from the beggining of your searchedie test if it is at the beginning
 * $-this means test if it is at the end
 */

console.log((/can/).test(wordts))

//Construct a regex to match a string that starts with a capital letter and ends with a period.

let abcf= /^[A-Z].*\.$/;

//Write a regex to capture the domain name from an email address.

//Looking for a word (from the latin alphabet) starting with A


const hallow= "I'm sure I'm not Ada,' she said, 'for her hair goes in such long ringlets, and mine doesn't go in ringlets at all.";
//tip:here to form word, we need a word boundary which is \b...\b
const snow= /\b[aA]\w+\b/g
console.log(hallow.match(snow))

//count the number of vowels in the below Counting vow

const aliceExcerpt =
  "There was a long silence after this, and Alice could only hear whispers now and then.";

  let abb=/[aeiou]+/g
  var lav= aliceExcerpt.match(abb)
  console.log(lav.length)

  //return the array of vowels in each word
  //lets capture each word first
  var cos= /\b\w+\b/gi
//[w] is technically work in regEx
//+ will not capture spaces
  var ley=aliceExcerpt.match(cos)
  var sad= /\b[aeiou]+\b/gi
  console.log(aliceExcerpt.match(cos))
  //console.log(ley.match(sad))//this will not work cause you cant acess the children of an array like this..
  let aliceExcerpt = "There was a long silence after this, and Alice could only hear whispers now and then.";

  // Match vowels in the entire text (all vowels in the excerpt)
  let abb = /[aeiou]+/gi;
  let lav = aliceExcerpt.match(abb); // Find all vowels in the entire text
  console.log(lav.length);  // Output the total count of vowels in the text
  
  // Capture each word in the sentence
  let cos = /\b\w+\b/gi;
  let ley = aliceExcerpt.match(cos);  // Array of words in the sentence
  
  // Define a regex to match vowels in each word
  let sad = /[aeiou]+/gi;
  
  // Use `map` to process each word and capture vowels in each word
  let lodo = ley.map(word => word.match(sad) || []);  // For each word, find the vowels (or empty array if no vowels)
  
  // Print the array of vowels for each word
  console.log(lodo);  // This will output an array of arrays, each containing vowels from a word
  
  // Extract 123 from abc123xyz.

  let laja =/^abc\d{3}xyz$/

  // Extract google.com from https://www.google.com/search?q=regex
  let bajana = /(?:https?:\/\/)?(?:www\.)?([^\/]+)/;
  