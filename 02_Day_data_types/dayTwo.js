// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let varOneDayTwo = `30 Days Of JavaScript`
// Print the string on the browser console using console.log()
console.log(varOneDayTwo);
// Print the length of the string on the browser console using console.log()
console.log(varOneDayTwo.length)
// Change all the string characters to capital letters using toUpperCase() method
console.log(varOneDayTwo.toUpperCase())
// Change all the string characters to lowercase letters using toLowerCase() method
console.log(varOneDayTwo.toLowerCase())
// Cut (slice) out the first word of the string using substr() or substring() method
console.log(varOneDayTwo.substring(0, 2))
// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(varOneDayTwo.substring(3, varOneDayTwo.length -1))
// Check if the string contains a word Script using includes() method
console.log(varOneDayTwo.includes('Days'))
// Split the string into an array using split() method
console.log(varOneDayTwo.split())
// Split the string 30 Days Of JavaScript at the space using split() method
console.log(varOneDayTwo.split(" "))
// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(", "))
// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(varOneDayTwo.replace("JavaScript", "Python"))
// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(varOneDayTwo.charAt(15))
// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(varOneDayTwo.charCodeAt(15))
// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(varOneDayTwo.indexOf('a'))
// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(varOneDayTwo.lastIndexOf('a'))
// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log('You cannot end a sentence with because because because is a conjunction'.indexOf('because'))
// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log('You cannot end a sentence with because because because is a conjunction'.lastIndexOf('because'))
// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log('You cannot end a sentence with because because because is a conjunction'.search('because'))
// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log(' 30 Days Of JavaScript '.trim())
// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(varOneDayTwo.startsWith('3'))
// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(varOneDayTwo.endsWith('t'))
// Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(varOneDayTwo.match('a'))
// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
console.log('30 Days Of '.concat('Javascript'))
// Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(varOneDayTwo.repeat(2))
