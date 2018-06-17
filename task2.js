/* Task 2 */

/**
 * Считает элемент ряда Фибоначчи по номеру
 * @param {number} n номер
 * @returns {number} элемент
 */
function fibonacci(n){
  // для 0 особый случай
  if (n === 0) {
    return 0;
  }

  let previous = 0;
  let current = 1;

  // положительные числа
  for (let i = 1; i < n; i++) {
    let temp = current;
    current += previous;
    previous = temp;
  }

  // отрицательные числа
  for (let i = -1; i > n; i--) {
    let temp = current;
    current = previous - current;
    previous = temp;
  }

  return current;
}

console.log(fibonacci(parseInt(process.argv[2])));
