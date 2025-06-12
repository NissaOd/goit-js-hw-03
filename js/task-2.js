function makeArray(firstArray, secondArray, maxLength) {
  // Объединяем два массива в один
  const combinedArray = firstArray.concat(secondArray);

  // Если длина объединённого массива больше, чем maxLength
  if (combinedArray.length > maxLength) {
    // Возвращаем обрезанный массив длиной maxLength
    return combinedArray.slice(0, maxLength);
  }

  // Иначе возвращаем весь объединённый массив
  return combinedArray;
}

// spread-оператор
// function makeArray(firstArray, secondArray, maxLength) {
//   // Объединяем массивы с помощью оператора расширения (...) и обрезаем результат
//   const combined = [...firstArray, ...secondArray];
//   return combined.slice(0, maxLength);
// }

console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []
