/**
 * Created by Administrator on 2016/7/30.
 */

// Note that subclassing Array is usually not the best solution
class Stack extends Array {
    get top() {
        return this[this.length - 1];
    }
    get bottom() {
        return this[0]
    }
    transferName(){
        console.log(`my name is stack`)
    }
}
let a = new Stack()
a.push(1)
a.push(2)
a.push(3)
console.log(a.top())
a.transferName()


class Nobel {
    transferName(){
        console.log(`my name is nobel`)
    }
}
let b = new Nobel()





