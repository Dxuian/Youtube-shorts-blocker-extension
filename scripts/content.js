// content.js
var browser;

if (typeof browser === "undefined") {
    var browser = chrome;
}

const worker = new Worker("worker.js");

worker.onmessage = function(event) {
    const response = event.data;
    // Handle the response from the worker if needed
};

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    (async () => {
        const y = await browser.storage.local.get("state");
        const state = y.state;

        worker.postMessage({ message, state });

        worker.onmessage = function(event) {
            const response = event.data;
            sendResponse(response);
        };
    })();
    return true;
});