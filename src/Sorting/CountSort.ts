
export class CountSort{

    private static findMax(arr: number[]): number{
        let max = arr[0];

        let i = 1;
        while(i< arr.length){
            if (arr[i] > max)
                max = arr[i];
            i++;
        }
        return max;
    }

    private static findMin(arr: number[]): number{
        let min = arr[0];

        let i = 1;
        while(i< arr.length){
            if (arr[i] < min)
                min = arr[i];
            i++;
        }
        return min;
    }

    public static sort(arr: number[]): void{
        const max = this.findMax(arr);
        const min = this.findMin(arr);

        const counts = Array.from({length: max - min + 1}, () => 0);
        

        for (let i = 0; i< arr.length; i++){
            counts[arr[i] - min]++;
        }

        for (let i = 1; i< counts.length; i++){
            counts[i] += counts[i -1];
        }

        let temp01 = 0;
        let temp02 = 0;

        for(let i = 0; i < counts.length; i++){
            temp02 = counts[i];
            counts[i] = temp01;
            temp01 = temp02;
        }

        const output = Array.from({length: arr.length}, () => 0);

        for (let i = 0; i < arr.length; i++){
            output[counts[arr[i] - min]] = arr[i];
            counts[arr[i] - min]++;
        }


        for (let i = 0; i < arr.length; i++) {
            arr[i] = output[i];
        }
    }
}

