
export class InsertionSort{

    private static shiftArray(arr: number[], barrier: number, shiftable: number): void{
        const temp = arr[shiftable];

        while(shiftable > barrier + 1){
            arr[shiftable] = arr[shiftable -1];
            shiftable--;
        }

        arr[shiftable] = temp;
    }


    public static sort(arr: number[]): void{
        
        for (let i = 1; i < arr.length; i++){
            
            let j = i -1;
            while(j >= 0){
                if (arr[i] > arr[j]){
                    this.shiftArray(arr,j,i);
                    break;
                }
                j--;
            }
            // if the number is smaller than every number to its right; j = -1
            if (j < 0){
                this.shiftArray(arr,j,i);
            }

        }
    }   
}