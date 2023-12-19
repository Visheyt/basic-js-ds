const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class ThreeNode {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  root() {
    return root.value
  }

  add(data) {
    this.root = add(this.root,data)
    function add(threeNode,data){
      if (!threeNode){
        return new ThreeNode(data)
      }else if (threeNode.value == data){
        return threeNode
      }
      if (data<node.value){
        threeNode.left = add(threeNode.left,data)
      }else {
        threeNode.right = add(threeNode.right,data)
      }
      return threeNode
    }
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};