

export class MergeSort{ 

    private static merge(arr: number[], start01: number, end01: number, start02: number, end02: number){
        
        let i = start01;
        let j = start02;
        let tempArray = new Array((end02 - start01) +1);
        let tempIndex = 0;

        while(i < end01 +1 && j < end02 +1){
            if (arr[i] > arr[j]){
                tempArray[tempIndex] = arr[j];
                j++;
                tempIndex++;
            }else{
                tempArray[tempIndex] = arr[i];
                i++;
                tempIndex++;
            }
        } 

        // if one of the sub arrays are finished, copy the rest of the elements of the other one into the temp array
        if (i < end01 +1){
            while(i < end01 +1){
                tempArray[tempIndex] = arr[i];
                i++;
                tempIndex++;
            }
        }

        if (j < end02 + 1){
            while(j < end02 +1){
                tempArray[tempIndex] = arr[j];
                j++;
                tempIndex++;
            }
        }

        // Copy the temp array into the array 
        let arrIndex = start01;
        while(arrIndex < end02 +1){
            arr[arrIndex] = tempArray[arrIndex - start01];
                        
            arrIndex++;
        }
    }

    public static sort(arr: number[], start: number, end: number): void{

        if (start === end)
            return
            
        const middle = start + Math.floor((end - start) / 2);

        this.sort(arr, start, middle);
        this.sort(arr, middle+1, end);

        return this.merge(arr, start, middle, middle+1, end);
    }

}