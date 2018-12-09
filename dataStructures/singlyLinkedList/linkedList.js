function Node(value, next = null) {
  this.value = value;
  this.next = next;
}

Node.prototype.print = function() {
  console.log(`[value]: ${this.value} [next]: ${JSON.stringify(this.next)}`);

  if (this.next) {
    return this.next.print();
  }

  console.log('\n');
}

function LinkedList(data, next) {
  if (data === null || data === undefined) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = new Node(data, next);
    this.tail = this.head;
  }
}

LinkedList.prototype.prepend = function(data) {
  return this.head = new Node(data, this.head);
}

LinkedList.prototype.append = function(data, next) {
  if (this.tail === null) {
    this.head = new Node(data, next);
    return this.tail = this.head;
  }

  this.tail.next = new Node(data);
  return this.tail = this.tail.next;
}

LinkedList.prototype.addAfter = function(previousNode, data) {
  if (!(previousNode instanceof Node)) {
    throw new Error('previousNode must be instance of Node');
  }

  const { next } = previousNode;
  if (next === null) {
    return this.append(data)
  }

  return previousNode.next = new Node(data, next);
}

LinkedList.prototype.removeFirst = function() {
  if (this.head === null) {
    return;
  }

  if (this.head === this.tail) {
    return this.head = this.tail = null;
  }

  return this.head = this.head.next;
}

LinkedList.prototype.remove = function(value) {
  if (this.head === null) {
    return;
  }

  if (this.head.value === value) {
    this.removeFirst();
  }

  let currentNode = this.head.next;
  let previousNode = this.head;

  while (currentNode) {
    if (currentNode.value === value) {
      return previousNode.next = currentNode.next;
    }

    previousNode = currentNode;
    currentNode = currentNode.next;
  }
}

LinkedList.prototype.print = function() {
  this.head.print();
}
