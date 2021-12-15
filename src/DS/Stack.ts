
import {LinkedList} from './LinkedList';

export class Stack<T>{
    private linkedList: LinkedList<T>;

    constructor(){
        this.linkedList = new LinkedList<T>();
    }

    push(data: T): Stack<T>{
        this.linkedList.addToTheBeginning(data);
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