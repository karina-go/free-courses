/* Task 3 */

let input = process.argv[2];
let vowels = '';
let consonant = '';
let digits = '';

for (symbol of input) {
  if ((/^[aeiouy]$/i).test(symbol)) { // гласные
    vowels += symbol;
  } else if ((/^[b-df-hj-np-tv-xz]$/i).test(symbol)) { // согласные
    consonant += symbol;
  } else if ((/^\d$/i).test(symbol)) { // цифры
    digits += symbol;
  }
}

console.log(vowels + ' ' + consonant + ' ' + digits);
