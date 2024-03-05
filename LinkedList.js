import Node from './Node.js'
console.log(Node)
export default class LinkedList {
    first = null;
    last = null;
    current = this.first
    count = 0


    append(value, key) {
        let itr = this.count;
        this.current = this.first;
        if (!this.first) {
            this.first = new Node(value)
            this.count++;
        } else {
            for (let i = 0; i < itr; i++) {
                if (this.current.value[Object.keys(value)[0]] === key) { this.current.value = value; return }
                if (this.current.nextNode) {
                    this.current = this.current.nextNode
                } else {
                    this.current.nextNode = new Node(value);
                    this.count++;
                    this.last = new Node(value);
                }
            }
        }
    }

    //prepend(value) { }
    size() { return this.count }

    head() {
        return this.first;
    }

    tail() {
        return this.last
    }

    at(index) {
        let node;
        this.current = this.first
        if (index === 0) {
            return this.first
        }
        for (let i = 0; i < this.count; i++) {
            if (index === i) node = this.current;
            this.current = this.current.nextNode;
        }
        return node;
    }

    pop() {
        this.current = this.first
        for (let i = 0; i < this.count - 2; i++) {
            this.current = this.current.nextNode;
        }
        this.count--;
        this.last = this.current;
        this.current.nextNode = null
    }
    contains(value) {
        let have = false;
        this.current = this.first
        for (let i = 0; i < this.count; i++) {
            if (Object.keys(this.current.value)[0] === value) have = true;
            this.current = this.current.nextNode;
        }
        return have;
    }

    find(value) {
        let index = 0;
        this.current = this.first
        for (let i = 0; i < this.count; i++) {
            if (value === this.current.value) index = i;
            this.current = this.current.nextNode;
        }
        return index;
    }

    get(value) {
        let result = null;
        this.current = this.first
        for (let i = 0; i < this.count; i++) {
            if (Object.keys(this.current.value)[0] === value.toString()) { result = this.current.value }
            this.current = this.current.nextNode;
        }
        return result;
    }

    remove(key) {
        let have = false;
        this.current = this.first
        let prevNode;
        let prevIndex = -99;
        if (this.count === 1) {
            this.first = null;
            have = true;
            return [have, true]
        }
        for (let i = 0; i <= this.count; i++) {
            if (this.current !== null) {
                if (Object.values(this.current.value)[0] === key) {
                    prevNode = this.first
                    have = true;
                    prevIndex = i
                    for (let j = 0; j < i - 1; j++) {
                        prevNode = prevNode.nextNode;
                    }
                }
            }

            if (prevIndex + 1 === i) {
                prevNode.nextNode = this.current;
                this.count--;
                break;
            }
            if (this.current !== null) {
                this.current = this.current.nextNode;
            }
        }
        return have;
    }

    toString() {
        let str = '';
        this.current = this.first
        for (let i = 0; i < this.count; i++) {
            if (!this.current && i === 0) {
                str = 'null'
            } else if (this.current && i === 0) {
                str = `(${this.current.value})`
            } else if (!this.current) {
                str += `->${'null'}`
            } else {
                str += `->(${this.current.value})`
            }
            this.current = this.current.nextNode;
        }
        return str;
    }
    //insertAt(value, index) { }
    //removeAt(index) { }
}



let obj = new LinkedList();
obj.append(456)
obj.append(68)
obj.append(56)
obj.append(46)

console.log(obj)