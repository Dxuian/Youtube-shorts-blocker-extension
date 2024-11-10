// content.js
var browser;

if (typeof browser === "undefined") {
    var browser = chrome;
}

const worker = new Worker(browser.runtime.getURL("worker.js"));

worker.onmessage = function(event) {
    const response = event.data;
    console.log("Message received from worker:", response);

    // Handle the response from the worker if needed
};

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    (async () => {
        const y = await browser.storage.local.get("state");
        const state = y.state;

        worker.postMessage({ message, state });

        worker.onmessage = function(event) {
            const response = event.data;
            console.log("Message received from worker: dxsssxsx    ", response);
            sendResponse(response);
        };
    })();
    return true;
});