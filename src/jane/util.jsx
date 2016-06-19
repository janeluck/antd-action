/**
 * Created by janeluck on 6/19/16.
 */
function createChainedFunction() {
    var args = arguments;
    return function chainedFunction() {
        for (var i = 0; i < args.length; i++) {
            if (args[i] && args[i].apply) {
                args[i].apply(this, arguments);
            }
        }
    };
}
export {
    createChainedFunction
}