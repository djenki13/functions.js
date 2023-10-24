// =============================
//         LINKED LIST 
// =============================

// VISUAL REPRESENTATION OF LINKED LIST
// SINGLY LINKED LIST
// There are three types of linked list, singly, doubly, and circular
// const n1 = {
//     data: 200,
// }

// const n2 = {
//     data: 300
// }

// const n3 = {
//     data: 400
// }

// n1.next = n2
// n2.next = n3
// n3.next = null
// // console.log(n1)

const visualList = {
    head: {
        data: 200,
        next: {
            data: 300,
            next: {
                data: 400,
                next: null
            }
        }
    }
}

// console.log('this is our tail', visualList.head.next.next)

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

// const n1 = new Node(100)
// const n2 = new Node(200, n1)
// const n3 = new Node(300, n2)
// console.log(n3)

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    insertFirst(data) {
        const current = new Node(data, this.head)
        this.head = current
        this.size++
    }

    getSize() { 
        return this.size
    }

    getFirst() {
        return this.head
    }

    getLast() {
        // let walker = this.head
        let walker = this.getFirst()
        // as long as walker.next is not null, we assign walker to the next node
        while(walker.next) {
            walker = walker.next
        }

        return walker
    }

    clear() {
        this.head = null
        this.size = 0
    }

    removeFirst() {
        this.head = this.head.next
        this.size--
    }

    removeLast() {
        // POSSIBLE IDEAS
        // some kind of iterator to get to the last one
        // run getLast() ?
        // find second to the last
        // using the size - if we had 18 times, we are going to stop at 17 and assign the value next to null

        // if there are no nodes
        if(!this.head) return
        
        // if we only have one node
        if(!this.head.next) {
            this.clear()
            return
        }

        // if there are more than one node we need to traverse through our list
        // goal is to assign the previous node's next property to null
        let previous = this.head
        let walker = this.head.next
        // console.log('we are outside the while loop this is our previous', previous)
        // console.log('we are outside the while loop this is our walker', walker)
        // the while loop will traverse through the list to the end
        while(walker.next) {
            // console.log('we are inside while loop')
            previous = walker
            // console.log('current previous', previous)
            walker = walker.next
            // console.log('current walker', walker)
        }
        // console.log('we finished the while loop')
        // console.log('final results for previous', previous)
        // console.log('final results for walker', walker)

        // removing the last node
        previous.next = null
        this.size--
        return walker
    }

    insertLast(data) {
        // We need to get to the end first to add to the list
        const lastNode = this.getLast()

        // if we have anything in our list, getLast() will return the last node or null
        if(lastNode) {
            // if we got something back from lastNode, create a new Node
            // our Node class has a default value of null for next
            // by not passing a next to our new Node it will turn into null, indicating that it's the new tail
            lastNode.next = new Node(data)
        } else {
            this.head = new Node(data)
        }

        // increase
        this.size++
    }

    getAt(index) {
        let walker = this.head

        // solution 1
        // for(let i = 0; i < this.getSize(); i++) {
        //     if(i === index) {
        //         return walker
        //     }
        //     walker = walker.next
        // }
        
        // solution 2
        let counter = 0
        while(walker) {
            if(counter === index) {
                return walker
            }
            counter++
            walker = walker.next
        }

        // if we don't have a list
        return null
    }

    insertAt(data, index) {
        // we will need to keep track of the previous node so we can reassign the new Node to it's next property

        // if we don't have a list
        if(!this.head || index === 0) this.insertFirst(data)

        // We already have the logic for this to get to a specific index
        const previous = this.getAt(index - 1) || this.getLast()
        // console.log('our previous', previous)
        const node = new Node(data, previous.next)
        previous.next = node
        this.size++
    }

    removeAt(index) {
        if(!this.head) return

        if(index === 0) {
            // if we only have one item, remove it. Our method removeFirst sets this.head to null
            this.removeFirst()
            return
        }

        const previous = this.getAt(index - 1)

        // if we don't have a pointer to our previous or previous.next doesn't exist
        // this means that index is either at the beginning or at the end
        // if one of them is null enter the if statement and return to break the function
        // if i
        if(!previous.next) return

        previous.next = previous.next.next
    }
}

const linkedList = new LinkedList()
// console.log(linkedList)
linkedList.insertFirst(100)
linkedList.insertFirst(200)
linkedList.insertFirst(300)
// linkedList.insertFirst(400)
// console.log(linkedList)
// linkedList.insertAt(50, 1)
// console.log(linkedList)
// console.log(linkedList.getAt(2))









