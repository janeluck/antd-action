/**
 * Created by janeluck on 8/6/16.
 */
function* count(){
    for (var x = 0; true ; x++) {

        yield x
    }
}

for (var x of count()) {
    console.log(x)
}