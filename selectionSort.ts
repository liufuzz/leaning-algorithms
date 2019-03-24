/**
 * -----选择排序-----
 * 找到数组最小的元素，将它和数组红第一个元素交换位置，接下来，在剩下的元素中找到最小的元素，
 * 将它与数组的第二个元素交换位置，往复如此，直到将整个数组排序。
 * 基本点就是不断地选择剩余元素之中的最小者。
 */

var arr = [8, 9, 7, 6, 5, 4, 3, 2, 1];

function selectionSort(arr: Array<number>) {
  for (let i = 0; i < arr.length - 1; i++) {
    var minNum = arr[i]; 
    for (let j = i + 1; j < arr.length; j++) {  //寻找最小值
      if (arr[j] < minNum) {
        let c = minNum;
        minNum = arr[j]; //交换两个值
        arr[j] = c;
      }
    }
    arr[i] = minNum;
  }
  return arr;
}
