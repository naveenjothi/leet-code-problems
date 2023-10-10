class NodeTemp {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function createNewNode(data) {
  const newNode = new NodeTemp(data);

  return newNode;
}

function countNodes(node) {
  // const newSet = new Set();
  let count = 0;
  // while (node.next != null) {
  //   if (newSet.has(node)) {
  //     return count;
  //   } else {
  //     count++;
  //     newSet.add(node);
  //   }
  // }
  let temp = node;
  while (temp.next != node) {
    count++;
    temp = temp.next;
  }
  return count;
}

function countNodesinLoop(head) {
  const slowPointer = head;
  const fastPointer = head;

  while (
    slowPointer != null &&
    fastPointer != null &&
    fastPointer.next != null
  ) {
    slowPointer.next = slowPointer.next;
    fastPointer.next = fastPointer.next.next;
    if (slowPointer == fastPointer) {
      return countNodes(slowPointer);
    }
  }
  return 0;
}

// head = newNode(1);
// head.next = newNode(2);
// head.next.next = newNode(3);
// head.next.next.next = newNode(4);
// head.next.next.next.next = newNode(5);

// /* Create a loop for testing */
// head.next.next.next.next.next = head.next;

const head = createNewNode(1);
head.next = createNewNode(2);
head.next.next = createNewNode(3);
head.next.next.next = createNewNode(4);
head.next.next.next.next = createNewNode(5);

head.next.next.next.next.next = head;

console.log("loops in", countNodesinLoop(head));
