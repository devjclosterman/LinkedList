// console.log('Hello World')

// //This represents a single Node
// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }
// // Add a new node to the end of the list
// append(data) {
//     const newNode = new Node(data);

//     if(!this.head) {
//         this.head = newNode;
//     } else {
//         let current = this.head;
//         while(current.next) {
//             current = current.next;
//         }
//         current.next = newNode;
//     }
// }

// // Insert a new Node at a specfic postition in the list
// insertAt(data, position) {
//     const newNode = new Node(data);

//     if(position === 0) {
//         newNode.next = this.head;
//         this.head = newNode;
//     } else {
//         let current = this.head;
//         let previous = null;
//         let count = 0;

//         while(count < position) {
//             previous = current;
//             current = current.next;
//             count++;
//         }
//         newNode.next = current;
//         previous.next = newNode;
//     }
// }

// //Remove a node at a specific position in the list
// removeAt(position) {
//     if(!this.head) {
//         return;
//     }
//     let current = this.head;
//     let previous = null;
// //     let count = 0;

// //     if(position === 0) {
// //         this.head = current.next;
// //     } else {
// //         while(count < position) {
// //             previous = current;
// //             current = current.next;
// //             count++;
// //         }

// //         previous.next = current.next;
// //     }
// // }

// // //Display the linked list
// // display() {
// //     let current = this.head;
// //     while(current) {
// //         console.log(current.data);
// //         current = current.next;
// //     }
// //   }
// // }

// // //Usage example:
// // const linkedList = new LinkedList();
// // linkedList.append(1);
// // linkedList.append(2);
// // linkedList.append(3);
// // linkedList.insertAt(4, 1);
// // linkedList.removeAt(2);
// // linkedList.display();

// //This is repeative however I like I want to memorize this stucture
// // Here is how you reverse a list

// //Single Node
// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     //Add a new node to the end of the list
//    append(data) {
//     const newNode = new Node(data);

//     if(!this.head) {
//         this.head = newNode;
//     } else {
//         let current = this.head;
//         while(current.next) {
//             current = current.next;
//         }
//         current.next = newNode;
//     }
//    } 

//    //Insert a new node at a specific position in the list
//    insertAt(data, position) {
//     const newNode = new Node(data);

//     if(position === 0) {
//         newNode.next = this.head;
//         this.head = newNode;
//     } else {
//         let current = this.head;
//         let previous = null;
//         let count = 0;
    
//         while(count < position) {
//             previous = current;
//             current = current.next;
//             count++;
//         }
//         newNode.next = current;
//         previous.next = newNode;
//     }
//    }
// //    //Remove a node at a specific position in the list
// //    removeAt(position) {
// //     if(!this.head) {
// //         return;
// //     }
// //     let current = this.head;
// //     let previous = null;
// //     let count = 0;

// //     if(position === 0) {
// //         this.head = current.next;
// //     } else {
// //         while(count < position) {
// //             previous = current;
// //             current = current.next;
// //             count++;
// //         }

// //         previous.next = current.next; 
// //     }
// //    }

// // //Reverse the linked list
// // reverse() {
// //     let current = this.head;
// //     let previous = null;
// //     let nextNode = null;

// //     while(current) {
// //         nextNode = current.next;
// //         current.next = previous;
// //         previous = current;
// //         current = nextNode;
// //     }
// //     this.head = previous;
// // }

// // //Display the linked list
// // display() {
// //     let current = this.head;
// //     while(current) {
// //         console.log(current.data);
// //         current = current.next;
// //     }
// //   }
// // }

// // //Usage example
// // const linkedList = new LinkedList();
// // linkedList.append(1);
// // linkedList.append(2);
// // linkedList.append(3);
// // linkedList.reverse();
// // linkedList.display();

// //Double linked list
// class Node {
//     constructor(data) {
//         this.data = data;
//         this.previous = null;
//         this.next = null;
//     }
// }

// class DoublyLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//     }

//     //Add a new node to the end of the list
//     append(data) {
//         const newNode = new Node(data);

//         if(!this.head) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             newNode.previous = this.tail;
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//     }

//     //Insert a new node at a specific position in the list
//     insertAt(data, position) {
//         const newNode = new Node(data);

//         if(position === 0) {
//             newNode.next = this.head;
//             if(this.head) {
//                 this.head.previous = newNode;
//             }
//             this.head = newNode;
//             if(!this.tail) {
//                 this.tail = newNode;
//             }
//         } else {
//             let current = this.head;
//             let count = 0;

//             while(count < position && current) {
//                 current = current.next;
//                 count++;
//             }

//             if(!current) {
//                 this.append(data);
//             } else {
//                 newNode.previous = current.previous;
//                 newNode.next = current;
//                 current.previous.next = newNode;
//                 current.previous = newNode;
//             }
//         }
//     }

//     //Remove a node at a specific position in the list
// removeAt(position) {
//     if(!this.head) {
//         return;
//     }

//     let current = this.head;
//     let count = 0;

//     while(count < position && current) {
//         current = current.next;
//         count++;
//     }

//     if(!current) {
//         return;
//     }

//     if(current === this.head) {
//         this.head = current.next;
//         if(this.head) {
//             this.head.previous = null;
//         }
//         if(current === this.tail) {
//             this.tail = null;
//         }
//     } else if(current === this.tail) {
//      this.tail = current.previous;
//      this.tail.next = null;
//     } else {
//         current.previous.next = current.next;
//         current.next.previous = current.previous;
//     }
// }

// //Display the doubly linked list from head to tail
// displayForward() {
//     let current = this.head;
//     while(current) {
//         console.log(current.data);
//         current = current.next;
//     }
// }

// //Display the doubly linked list from tail to head
// displayBackward() {
//     let current = this.tail;
//     while(current) {
//         console.log(current.data);
//         current = current.previous;
//     }
// }
// }

// //Usage examples:
// const doublyLinkedList = new DoublyLinkedList();
// doublyLinkedList.append(1);
// doublyLinkedList.append(2);
// doublyLinkedList.append(3);
// doublyLinkedList.insertAt(4, 1);
// doublyLinkedList.removeAt(2);
// doublyLinkedList.displayForward();
// doublyLinkedList.displayBackward();

// const sortedArrays = (arr1, arr2) => {
//     let newArr = [];
//     for (let i = 0; i < arr2.length; i++) {
//         if(arr1.indexOf(arr2[i]) > 0) {
//             if(newArr.indexOf(arr2[i]) === -1) {
//                 newArr.push(arr2[i])
//             }
//         }
//     }
//     return newArr;
// }

// sortedArrays([1, 2, 2, 3, 4, 5], [2, 2, 4, 6, 7, 8])
//return [2, 4]

// const getFrequencies = (arr) => {
//    return arr.reduce((obj, cur) => {
//     !obj[cur] ? obj[cur] = 1 : obj[cur]++;
//     return obj;
//    }, {})
// };

// console.log(getFrequencies(["A", "B", "A", "A", "A"]));

const reverseString = (str) => {
   let reversedStr = '';
   for (let i = str.length - 1; i >= 0; i--) {
   reversedStr += str[i];      
   }
   return reversedStr;
}

console.log(reverseString('Hello')); //output: elloH