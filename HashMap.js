import LinkedList from './LinkedList.js'
class HashMap {
    array = Array.from({ length: 16 });
    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode += primeNumber + key.charCodeAt(i);
        }

        return hashCode;
    }

    set(key, value) {
        let hash = this.hash(key)
        let index = hash % 16;
        let obj = {};
        obj[hash] = value
        if (this.array[index]) {
            this.array[index].append(obj, key)
        } else {
            this.array[index] = new LinkedList()
            this.array[index].append(obj, key)
        }
        //this.array[index].append(obj, hash)
    }

    get(key) {
        let hash = this.hash(key)
        let index = hash % 16;
        if (!this.array[index]) return null
        let result = this.array[index].get(hash)
        return result;
    }

    has(key) {
        let hash = this.hash(key)
        let index = hash % 16;
        let result = this.array[index].contains(hash)
        return result;
    }

    remove(key) {
        let hash = this.hash(key)
        let index = hash % 16;
        if (!this.array[index]) return false

        let result = this.array[index].remove(key)
        if (result[1]) {
            this.array[index] = undefined;
            return result[0]
        } else {
            return result;
        }
    }
    length() {
        return this.array.filter(e => e !== undefined).length
    }
    clear() { this.array = Array.from({ length: 16 }); }
    keys() { return this.array.map((e, i) => [e, i]).filter(e => e[0] !== undefined).map(e => e[1]) }
    values() { return this.array.filter(e => e !== undefined) }
    entries() { return this.array.map((e, i) => [i, e]) }
}



let rrr = new HashMap()
rrr.set('asd', 'asd')
rrr.set('fasd', 'fasd')
rrr.set('fsad', 'fsad')
rrr.set('asd', 'asd')
rrr.set('sdfg', 'sdfg')
rrr.set('gfds', 'gfds')
rrr.set('fgsd', 'fgsd')
rrr.set('dsgf', 'dsgf')
console.log(rrr)

