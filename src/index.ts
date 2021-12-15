import { HeapSort } from "./Sorting/HeapSort";

const arr = [10,10,8,7,6,5,5,4,2,1,1,1,1,1];
HeapSort.sort(arr);

arr.forEach(e => console.log(e));