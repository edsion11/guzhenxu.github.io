/**
 *
 * @param {*} array
 */
function SelectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = array[i]
    let k = i
    for (let j = i; j < array.length; j++) {
      if (array[j] < min) {
        min = array[j]
        k = j
      }
    }
    ;[array[i], array[k]] = [array[k], array[i]]
  }
}
let array = [3, 2, 5, 3, 5, 1, 2, 3, 5, 3, 5]
SelectionSort(array)
console.log(array)
