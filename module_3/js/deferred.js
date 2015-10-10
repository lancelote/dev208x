// Sample worker script

// Send ready message
self.postMessage('READY');

// Sleep for two seconds
// Simulate long running operation
sleep(2000);

// Send completed message
self.postMessage('COMPLETED');

// Additional
function sleep (milliseconds) {
    var startingTime = new Date().getTime();
    var stopTime = startingTime + milliseconds;

    while (stopTime >= new Date().getTime()) { }
}
