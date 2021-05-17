function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    const namedFunction = function(){
        return "Hello, world!"
    }
    return namedFunction;
}

function returnsAnAnonymousFunction(){
    return function(){
        return "Goodbye, world!";
    }
}