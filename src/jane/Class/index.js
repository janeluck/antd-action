/**
 * Created by Administrator on 2016/7/30.
 */
class Stack extends Array {
    get top() {
        return this[this.length - 1];
    }
}
let a = new Stack()
a.push(1)
a.push(2)
a.push(3)
console.log(a.top())
