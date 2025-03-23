class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    append(value) {
        const node = new ListNode(value);
        if (this.isEmpty) {
            this.head = node
        } else {
            let prev = this.head;
            while(prev.next) {
                prev = prev.next
            }
            prev.next = node;
        }
        this.size++
    }

    popNode(head) {
        if (!head){
            return null;
        }

        if (!head.next) {
            return null;
        }

        let current = head;
        while (current.next.next) 
        current = current.next;

        current.next = null;

        return head;
    }

    prepend(value) {
        const node = new ListNode(value);
        if (this.isEmpty) {
            this.head = node
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++
    }

    printSize() {
        let num = 0;
        let current = this.head;
        while (current) {
            num++;
            current = current.next;
        }
        console.log("The current length of the linked list is " + num + " nodes");
    }

    returnFirstNode() {
        console.log(this.head);
        return this.head;
    }

    returnLastNode() {
        let current = this.head;
       while (current) {
        current = current.next;
        current.next == null ? console.log(current) : null;
       }

    }

    containsValue(value) {
        let current = this.head;
        let counter = 0;
        while (current) {
           if (value === current.data) {counter++;} 
            current = current.next;
        }
        counter == 1 ? console.log(true) : console.log(false); 
        
    }

    returnAtIndex(num) {
        let current = this.head;
        let counter = 1;

        while (current !== null) {
            counter === num ? console.log(current) : void 0;
            counter++;
            current = current.next;
        }
    }

    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
    
}

class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let node1 = new ListNode(2);
let node2 = new ListNode(5);
node1.next = node2;



let list = new LinkedList(node1);
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    //list.prepend(Math.round(((Math.random()) * 10) ** 2));
    //list.printList();
    //list.returnAtIndex(4);
    list.printList();
})

let sizeBtn = document.getElementById("sizeBtn");
sizeBtn.addEventListener("click", () => {
    list.containsValue(8)
})

list.append(6);
list.append(7);
list.append(8);
