// Callback example
//JavaScript is single-threaded, but it supports asynchronous
//  programming to handle tasks that take time, like network requests or timers. 
// There are three main ways to handle asynchronous operations: callbacks, promises, and async /
// Callback example
function fetchData(callback) {
    setTimeout(() => {
        callback('Data received');
    }, 2000);
}

function processData(data) {
    console.log(data);
}

fetchData(processData); // Output after 2 seconds: Data received
