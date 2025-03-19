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
    list.append(Math.random());
    list.printList();
})

list.append(6);
list.append(7);

