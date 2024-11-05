// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let pattern = /love/gi
console.log(sentence.match(pattern).length)

//Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let sentence2 = 'You cannot end a sentence with because because because is a conjunction'
let pattern2 = /because/gi
console.log(sentence2.match(pattern2).length)
/*Clean the following text and find the most frequent word (hint, use replace and regular expressions).

    const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
*/
const sentence3 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

const cleanedText = sentence.replace(/[^a-zA-Z\s]/g, '').toLowerCase();
const words = cleanedText.split(/\s+/);
const wordCounts = {};
for (const word of words) {
  wordCounts[word] = (wordCounts[word] || 0) + 1;
}
let mostFrequentWord = '';
let maxCount = 0;
for (const [word, count] of Object.entries(wordCounts)) {
  if (count > maxCount) {
    mostFrequentWord = word;
    maxCount = count;
  }
}

console.log(`Most frequent word: '${mostFrequentWord}' with ${maxCount} occurrences`);

//Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
const numbers = text.match(/\d+/g).map(Number);
const monthlySalary = numbers[0] * 12;    
const annualBonus = numbers[1];          
const monthlyCourses = numbers[2] * 12;  

const totalAnnualIncome = monthlySalary + annualBonus + monthlyCourses;

console.log(`Total annual income: ${totalAnnualIncome} euros`);