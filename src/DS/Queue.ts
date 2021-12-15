
import {LinkedList} from './LinkedList';

export class Queue<T>{
    private linkedList: LinkedList<T>;

    constructor(){
        this.linkedList = new LinkedList<T>();
    }

    push(data: T): Queue<T>{
        this.linkedList.addToTheEnd(data);
        return this;
    }

    pop(): T{
        return this.linkedList.removeFromBeginning().getData();
    }

    peek(): T | null{
        return this.linkedList.getHead()!.getData();
    }

    isEmpty(): boolean{
        return this.linkedList.getLength() > 0 ? true : false;
    }

    print(): void{
        this.linkedList.print();
    }

}