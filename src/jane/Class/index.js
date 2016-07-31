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


console.log('class: index')
import '../Alert'

