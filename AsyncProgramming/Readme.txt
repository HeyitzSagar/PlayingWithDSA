// problem statement 

1.The code snippet below is synchronous. It calls callback1 one time and
 callback2 three times. You must modify this code to make it asynchronous with the following rules:

callback1 must be called only one time, after 2 seconds.
callback2 must be called three times with an interval of 1 second.


example code : 
function job(callback1, callback2) {
    callback1();

    callback2();
    callback2();
    callback2();
}

module.exports = job;
