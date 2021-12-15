
export class SelectionSort{

    private static swap(arr: number[], first: number, second: number){
        const temp = arr[second];
        arr[second] = arr[first];
        arr[first] = temp;
    }

    private static findIndexMin(arr: number[], start: number, end: number): number{
        let minIndex = start;

        let i = start + 1;

        while(i <= end){
            if (arr[i] < arr[minIndex]){
                minIndex = i;
            }

            i++;
        }

        return minIndex;
    }

    public static sort(arr: number[]): void{
        for (let i = 0; i < arr.length - 1; i++){
            const minIndex = this.findIndexMin(arr,i,arr.length - 1);
            this.swap(arr,i,minIndex);
        }
    }
}