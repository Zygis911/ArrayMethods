function delayedCallBack(delay, callBack) {
    setTimeout(callBack, delay);
}


function logDelayedMessage() {
    console.log("Delayed message after 2 secs");
}


const result = delayedCallBack(2000, logDelayedMessage)

console.log(result)