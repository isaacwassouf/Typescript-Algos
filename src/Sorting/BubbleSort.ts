

export class BubbleSort{
    
    private static swap(arr: number[], first: number, second: number){
        const temp = arr[second];
        arr[second] = arr[first];
        arr[first] = temp;
    }

    public static sort(arr: number[]): void{
        let j = arr.length - 1;
        while(j !== 0 ){
            let i =0;
            while(i < j){
                if (arr[i] > arr[i+1])
                    this.swap(arr, i, i+1);
                
                i++;
            } 
            j--;
        }
    }
}