class LinkedList{
    constructor(value){
        this.head=new Node(value)
        this.tail=this.head
    }

    add(value){
        let node = new Node(value)
        this.tail.next=node
        this.tail=node

    }
}

class Node {
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

console.log("===========Output Here====================")
ll= new LinkedList(4)
ll.add(5)
ll.add(3)
console.dir(ll)