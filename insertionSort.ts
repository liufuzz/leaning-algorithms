/**
 * -----插入排序-----
 */
var arr = [8, 9, 7, 6, 5, 4, 3, 2, 1];

function insertionSort(arr: Array<any>) {
  for (let i = 1; i < arr.length; i++) {
    let e = arr[i]; //复制一个副本
    let j; //j保存元素e应该插入的位置
    for (j = i; j > 0 && arr[j - 1] > e; j--) {
      arr[j] = arr[j - 1]; //大于e 的元素向后移动
    }
    arr[j] = e;
  }
  return arr;
}

console.log(insertionSort(arr));
