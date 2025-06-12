function filterArray(numbers, value) {
  // Создаём пустой массив для хранения подходящих чисел
  const result = [];

  // Проходим по каждому элементу массива numbers
  for (let i = 0; i < numbers.length; i++) {
    // Если число больше заданного значения — добавляем его в результат
    if (numbers[i] > value) {
      result.push(numbers[i]);
    }
  }

  // Возвращаем новый массив с числами, которые больше value
  return result;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
