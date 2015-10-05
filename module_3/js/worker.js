// Sample worker script
// The script executes immediately on load
self.addEventListener('message', function (e) {
    // Receive message from page
    var message = e.data;

    // Send message to page
    self.postMessage(message + ' - Processed!')
});

self.postMessage('READY');