

export class DataNode<T>{
    private data: T;
    private next: DataNode<T> | null;

    constructor(data: T, next: DataNode<T> | null = null){
        this.data = data;
        this.next = next;
    }


    getData(): T{
        return this.data;
    }

    getNext(): DataNode<T> | null{
        return this.next;
    }

    setData(data: T): DataNode<T>{
        this.data = data;
        return this;
    }

    setNext(next: DataNode<T> | null): DataNode<T>{
        this.next = next;
        return this;
    }

    clone(): DataNode<T>{
        return new DataNode<T>(this.data, this.next);
    }

}
