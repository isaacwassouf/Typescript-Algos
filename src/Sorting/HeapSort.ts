
export class HeapSort{

    private static swap(arr: number[], first: number, second: number){
        const temp = arr[second];
        arr[second] = arr[first];
        arr[first] = temp;
    }

    private static getBigger(arr: number[] ,first: number, second: number): number{
        if (!arr[first])
            return second;
        
        if(!arr[second])
            return first;

        if (arr[first] > arr[second]) 
            return first;
        return second;
    }

    private static getBiggest(arr: number[] ,first: number, second: number, third: number): number{
        return this.getBigger(arr,first, this.getBigger(arr,second,third));
    }

    private static buildMaxHeap(arr: number[], end: number){
        for (let i = end; i >= 0; i--){
            
            // check if the node is a leaf
            if ((!arr[i*2 +1] && !arr[i*2 +2] ))
                continue;
            // If the left most child is bigger than the barrier(also means that the right child is) then skip
            if(((i*2 + 1 ) > end))
                continue;
            
            let biggest = null;
            if (((i*2 + 2 ) > end))
                biggest = this.getBigger(arr,i, i*2 + 1)
            else
                biggest = this.getBiggest(arr, i, i*2 + 1, i*2 +2);

            if (biggest !== i)
                this.swap(arr, i, biggest);
            
        }
    }

    public static sort(arr: number[]): void{
        for(let i = arr.length -1; i > 0 ; i--){
            this.buildMaxHeap(arr,i);
            this.swap(arr, 0, i);
        }
    }

}