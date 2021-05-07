// Implement a data structure VirtuallyCloneableStacks with the following methods

// VirtuallyCloneableStacks() which initializes an empty stack at index 0.
// copyPush(i) which clones the stack at index i, pushes an element to the clone, and then pushes the clone into the list of stacks.
// copyPop(i) which clones the stack at index i, pops an element from the clone, and then pushes the clone into the list of stacks.
// size(i) which returns the number of elements in stack at index i.
// You can assume that each call will be valid. For example, a stack won't be popped from an empty stack, and i will be in bounds.

class VirtuallyCloneableStacks {
    constructor() {
        this.storage = {0: 0}
        this.length = 1
    }

    copyPush(i) {
        this.storage[this.length] = this.storage[i] + 1
        this.length++
    }

    copyPop(i) {
        this.storage[this.length] = this.storage[i] - 1
        this.length++
    }

    size(i) {
        return this.storage[i]
    }
}