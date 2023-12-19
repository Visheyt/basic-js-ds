const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.element = null;
  }

  root() {
    return this.element
  }
  add(data) {
    this.element = addRoot(this.element,data)
    function addRoot(treeNode,data){
      if (!treeNode){
        return new Node(data)
      }else if (treeNode.data == data){
        return treeNode
      }
      if (data<treeNode.data){
        treeNode.left = addRoot(treeNode.left,data)
      }else {
        treeNode.right = addRoot(treeNode.right,data)
      }
      return treeNode
    }
  }

  has(data) {
    let isHas = search(this.element,data)
    function search(treeNode,value){
      if (!treeNode)return false
      else if(treeNode.data==value) return true

      if (value<treeNode.data) return search(treeNode.left,value)
      else return search(treeNode.right,value)
    }
    return isHas
  }

  find(data ) {
    let isFind = search(this.element,data)
    function search(treeNode,value){
      if (!treeNode) return null
      else if(treeNode.data==value) return value

      if (value<treeNode.data) return search(treeNode.left,value)
      else return search(treeNode.right,value)
    }
    return isFind
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    let currentRoot = this.element
    while(currentRoot && currentRoot.left) {
      currentRoot = currentRoot.left
    }
    return currentRoot.data
  }

  max() {
    let currentRoot = this.element;
    while (currentRoot && currentRoot.right){
      currentRoot = currentRoot.right
    }
    return currentRoot.data
  }
}

module.exports = {
  BinarySearchTree
};