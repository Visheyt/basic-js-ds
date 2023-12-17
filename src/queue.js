const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queue = []
  }
  getUnderlyingList() {
    class LinkedList {
      constructor(){
        this.begin = null;
        this.end = null;
      }
      add(value){
        let node = {value,next:null}
        if (!this.begin){
          this.begin = node
        }

        if (this.end){
          this.end.next = node
        }
        this.end = node
      }
    }
    let finalList = new LinkedList()
    for (let i =0 ; i<this.queue.length;i++){
      finalList.add(this.queue[i])
    }
    return finalList.begin
  }
  enqueue(value) {
    this.queue.push(value)
  }

  dequeue() {
    return this.queue.shift()
  }
}

module.exports = {
  Queue
};
