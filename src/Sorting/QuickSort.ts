

export class QuickSort{

    private static getBigger(first: number, second: number): number{
        if (first > second) 
            return first;
        return second;
    }

    private static getMedianIndex(subArr: number[], firstIndex: number, lastIndex: number): number | undefined{
        const firstElement = subArr[firstIndex];
        const lastElement = subArr[lastIndex];

        const middleIndex = firstIndex + Math.floor(((lastIndex - firstIndex) +1) / 2);
        const middleElement = subArr[middleIndex];

        const biggest = this.getBigger(firstElement, this.getBigger(lastElement, middleElement));

        if (biggest === firstElement)
            return this.getBigger(middleElement, lastElement) === middleElement ? middleIndex : lastIndex;
        
        if (biggest === middleElement)
            return this.getBigger(firstElement, lastElement) === firstElement ? firstIndex : lastIndex;

        if (biggest === lastElement)
            return this.getBigger(firstElement, middleElement) === firstElement ? firstIndex : middleIndex;
    }

    private static swap(arr: number[], first: number, second: number){
        const temp = arr[second];
        arr[second] = arr[first];
        arr[first] = temp;
    }
    
    private static partition(arr : number[], start: number, end: number): number{
        const pivotIndex = this.getMedianIndex(arr, start, end)!;
        const pivot = arr[pivotIndex];

        // move pivot to the last position
        this.swap(arr,pivotIndex,end);

        let i = start;
        let j = end - 1;

        while(true){

            while(arr[i] < pivot && i <= end)
                i++;
            
            while(arr[j] > pivot && j >= start)
                j--;

            
            if (i > j) break;

            this.swap(arr, i, j);
            i++;
            j--;
        }

        return i;
    } 

    public static sort(arr: number[], start: number, end: number): void{

        if (start >= end){
            return
        }
        const pivotIndex = this.partition(arr, start, end);

        this.swap(arr, pivotIndex, end);

        this.sort(arr, start, pivotIndex-1);
        this.sort(arr, pivotIndex+1, end);
    }
}