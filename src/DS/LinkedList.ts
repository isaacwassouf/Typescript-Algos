
import {DataNode} from './DataNode';

export class LinkedList<T>{

    private head: DataNode<T> | null;
    private length: number;

    constructor(){
        this.head = null;
        this.length = 0;
    }

    getHead(): DataNode<T> | null{
        return this.head;
    }

    getLength(): number{
        return this.length;
    }

    addToTheBeginning(data: T){
        const node: DataNode<T> = new DataNode<T>(data);

        if (this.head){
            node.setNext(this.head);
            this.head = node;
        }else{
            this.head = node;
        }
        this.length += 1; 
    }

    addToTheEnd(data: T){
        const node: DataNode<T> = new DataNode<T>(data);

        if (this.head){
            let current: DataNode<T> | null = this.head;

            while(current!.getNext() !== null){
                current = current!.getNext();
            }

            current!.setNext(node);
        }else{
            this.head = node;
        }
        this.length += 1; 
    }

    addToPosition(position: number, data: T) {

        if (position > this.length || position < 0)
            throw new Error('Out Of Boundry!');

        if (position === 0 || this.length === 0){
            return this.addToTheBeginning(data);
        }

        if (position === this.length){
            return this.addToTheEnd(data);
        }

        const node: DataNode<T> | null = new DataNode<T>(data);
        let previous: DataNode<T> | null = this.head;

        for(let i = 0; i < position - 1; i++){
            previous = previous!.getNext();
        }
        node.setNext(previous!.getNext());
        previous!.setNext(node);

    }

    removeFromBeginning(): DataNode<T>{
        const prevHead = this.head;
        this.head = this.head!.getNext();
        this.length--;
        return prevHead!.setNext(null);
    }

    removeFromEnd(): DataNode<T>{
        let current = this.head;

        while(current!.getNext()!.getNext() !== null){
            current = current!.getNext();
        }

        const tail = current!.getNext();
        current!.setNext(null);

        this.length--;
        return tail!;
    }

    removeFromPosition(position: number): DataNode<T>{
        if (position >= this.length || position < 0){
            throw new Error('Out of boundries');
        }

        if (position === 0)
            return this.removeFromBeginning();

        if (position === this.length -1)
            return this.removeFromEnd()

        let previous = this.head;
        let i = 0;

        while(i < position -1){
            previous = previous!.getNext();
            i++;
        }

        const node = previous!.getNext();

        previous!.setNext(node!.getNext());

        this.length--;

        return node!.setNext(null);
    }

    reverse(): LinkedList<T>{
        if (this.length === 1)
            return this;

        let current = this.head;
        let successor = current!.getNext();
        current!.setNext(null);

        while(successor !== null){
            const temp = successor.clone();

            successor.setNext(current);

            current = successor;
            successor = temp.getNext();
        }

        this.head = current;

        return this;
    }

    print(): void{
        let current = this.head;

        console.log('List: ');

        while(current){
            console.log(current.getData());
            current = current.getNext();
        }
    }

}