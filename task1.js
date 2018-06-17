/* Task 1 */

/**
 * Проверяет, является ли предложение палиндромом
 * @param {string} sentence
 * @returns {string} 'YES' если палиндром, 'NO' если нет
 */
function isPalindrome(sentence) {
  const letters = sentence
    .replace(/^w+/g,'') // оставляем только буквы
    .toLowerCase() // приводим к нижнему регистру

  // В целях эффективности двигаемся по массиву с разных концов в центр,
  // сравнивая соответствующие элементы
  for (let i = 0; i < Math.ceil(letters.length / 2); i++) {
    if (letters[i] !== letters[letters.length - i - 1]) {
      return 'NO';
    }
  }

  return 'YES';
}

console.log(isPalindrome(process.argv[2]));
