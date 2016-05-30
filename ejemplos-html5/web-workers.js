function countDown(from) {
    // Notify main thread
    postMessage(from);

    // Chech that countDown isn't arrived to 0
    if (from > 0){
        setTimeout(function () {
            countDown(--from); // Executes -1 before calling countDown function
        }, 1000);
    }
}

// Init countdown
countDown(10);