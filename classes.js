class MyList {
    constructor() {
        this.head = null
        this.len = 0
    }

    push(value) {
        this.head = new Item(value, this.head)
        this.len += 1
    }

    pushBack(value) {
        let currentLast = this.last()
        let newLast = new Item(value, null)
        //this.last = newLast
        if (currentLast == null)
            this.head = newLast
        else
            currentLast.next = newLast

        this.len += 1
    }

    elementAt(position) {
        let current = this.head
        let currentPosition = 0

        while (current != null) {

            if (currentPosition == position) {
                return current
            }

            current = current.next
            currentPosition++
        }

        return null
    }

    last() {
        let current = this.head

        if (current == null)
            return null

        while (current.next != null) {
            current = current.next

        }

        return current
    }

    max() {
        let current = this.head

        if (current == null)
            return null

        let max = current.value
        let maxFoundAt = 0
        let currentPosition = 0

        while (current.next != null) {
            current = current.next
            currentPosition++
            if (current.value > max) {
                max = current.value
                maxFoundAt = currentPosition
            }
        }

        return {
            value: max,
            position: maxFoundAt
        }
    }

    deleteAt(position) {
        let previous = this.elementAt(position - 1)
        let next = this.elementAt(position + 1)
        if (previous == null) {
            this.head = next
        } else
            previous.next = next
        this.len--
    }

    sort() {
        let result = new MyList()

        while (this.len > 0) {
            let maxn = this.max()
            this.deleteAt(maxn.position)
            result.pushBack(maxn.value)
        }

        return result
    }

    filter(condition) {
        let result = new MyList()
        let current = this.head
        while (current != null) {

            if (condition(current.value)) {

                result.push(current.value)
            }

            current = current.next

        }

        return result
    }

	copy() {
    	let myCopy = new MyList()
        myCopy.head = this.head.copy()
        myCopy.len = this.len
        
        return myCopy
    }
    
    equals(other) {
    	if (other == this)
        	return true
            
        if (other.len != this.len)
        	return false
            
        if (other.head == null && this.head == null)
        	return true
            
        if (other.head != null && this.head != null)            
        	return other.head.equals(this.head)
            
        return false
    }

    quickSort() {
        /*     
        	const quickSort = (arr) => {
                    if (arr.length <= 1) return arr;

                    const center = last(arr);
                    const left = arr.filter(el => el < center);
                    const right = arr.filter((el, i) => el >= center && i !== arr.length - 1);

                    return [...quickSort(left), center, ...quickSort(right)];
                } 
            */
    }

    sum() {
        let sum = 0
        let lastElement = this.head

        while (lastElement != null && lastElement.next != null) {
            lastElement = lastElement.next
            sum = sum + lastElement.value
        }

        return sum
    }

    length() {
        return this.len
    }

    lengthSlow() {
        let len = 0
        let lastElement = this.head

        while (lastElement != null && lastElement.next != null) {
            lastElement = lastElement.next
            len = len + 1
        }

        return len
    }
}

class Item {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
    
    copy() {
    	let nextCopy = this.next == null ? null : this.next.copy()
    	let result = new Item(this.value, nextCopy)
        
        return result
    }
    
    equals(other) {
    	if (other == this)
        	return true
            
        if (other.value != this.value)
        	return false
            
        if (other.next == null && this.next == null)
        	return true
            
        if (other.next != null && this.next != null)
        	return other.next.equals(this.next)
            
        return false
    }
}

let a = new MyList()
//a.filter((e) => e > 1000 )


a.push(1)
a.push(10)
a.push(6)
a.push(7)

copy = a.copy()

a.elementAt(2).value = 3


console.log(a.equals(copy))


//console.log(a.filter((e) => e > 1000))
//console.log(e)
