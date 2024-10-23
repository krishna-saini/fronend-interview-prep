

const once = (fn) =>{
    // to track the number of invocation
    let count = 0;
    let output;

    // a function defination is used to preserve context 
    // there is no way we can call an arrow function with defined context
    function innerFunction(...args){
        // if the function is not executed 
        if(!count){
            output = fn.apply(this, args);
            count++;
            return output
        }
        return output;

    }
    return innerFunction;
}

