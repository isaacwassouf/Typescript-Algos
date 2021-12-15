import { MergeSort } from "../Sorting/MergeSort";

export class BinarySearch{

    public static search(arr: number[] ,num: number): number{
        MergeSort.sort(arr, 0, arr.length-1);
        return this.findIndex(arr,0,arr.length-1 ,num)!;
    }

    private static findIndex(arr: number[], start: number, end: number, num: number): number| undefined{

        if (end < start){
            return -1;
        }

        if (start === end){
            if (arr[start]  === num)
                return start;
            else
                return -1;
        }

        const middle = start + Math.floor(((end - start) ) / 2 );

        if (arr[middle] === num){
            return middle;
        }

        if (arr[middle] > num){
            return this.findIndex(arr, start, middle - 1, num);
        }

        if (arr[middle] < num){
            return this.findIndex(arr,middle+1, end, num);
        }
    }
}