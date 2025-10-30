// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// console.log(reverseString("hello les gens")); // Output: "olleh"

// function palindrome(str) {
//     if (str.split('').reverse().join('') === str) 
//         {
//             console.log("oui c'est un palindrome");
//         }
//     else {
//         console.log("non ce n'est pas un palindrome");
//     }
// }
// palindrome("engne"); // Output: "oui c'est un palindrome"
// palindrome("hello"); // Output: "non ce n'est pas un palindrome"

// const btn = document.querySelector('button');
// const fruits = ['banana', 'apple', 'orange', 'mango', 'grape'];

// function random( ){
// let random = Math.round(Math.random() * (fruits.length - 1));
// console.log(fruits[random]);

// }
//  btn.addEventListener('click', random);\

const input = document.querySelector('input');
const result = document.querySelector('#result');

input.addEventListener('keyup', () => {
    result.innerHTML = input.value;
});