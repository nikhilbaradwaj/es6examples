export function *increment() {
    return 1 + (yield "started");   // the brackets are required here.
}

// Yield inside yield. It alternatively returns "Hi" and the parameter + 1 on each call.
export function *increment2() {
    while (true) {  //infinite loop!
        yield 1 + (yield "Hi");  //yielding a yield expression?
    }
}

//iterates through a given array. Also supports the case if an error is throws/passed into the generator.
export function *iterate(arr) {
    try {
        for (let i = 0; i < arr.length; i++) {
            yield arr[i];
        }
    } catch(err) {
        return "Error Occurred";
    }
}

//iterating through nextFibonacci gives the next fibonacci number as many times as you call it.
export function *nextFibonacci() {
    let x = 0;
    let y = 1;
    yield x;
    yield y;
    while(true) {  //infinite loop!
        yield x + y;
        let temp = x;
        x = y;
        y = x + temp;
    }
}

//generator delegating/yielding to another generator
export function *delegator() {
    yield 12;
    yield *iterate([43,56,34]);
    yield 367;
}

// TODO - yield a function - A subtle, tricky detail
// If the  function returns right away, it would create an error,
// because (and this is the tricky part) the generator is not technically in a paused state yet. Our function call
// is being fully evaluated first, and then the yield pauses. So, we can't call it.next(..) or the generator back
// immediately inside the yielded function, because at that exact moment the generator is still running (yield hasn't been processed).
// But we can call it.next(..) "later", immediately after the current thread of execution is complete,
// by using setTimeout(..0) "hack".

//TODO - Can we yield a promise in an async generator function?

//TODO async programming with generators

//TODO - Concurrency with generators AKA Communicating Sequential Processes (CSP)
