if (typeof browser === "undefined") {
    var browser = chrome;
}
console.log("background.js loaded");
browser.runtime.onInstalled.addListener(async () => {
    // let keep = 0; // Changed var to let for block scope
    let stat1 = { "state": 0 };
    setTimeout(() => {
        console.log("set");
    }, 20000); // Removed quotes around 1000 for consistency
    await browser.storage.local.set(stat1).then(() => { console.log("f1") }, () => { console.log("f2") });
});

var target = "https://www.youtube.com/*";

// Use browser instead of chrome for Firefox compatibility
browser.webRequest.onCompleted.addListener(rechange, { urls: [target] });
browser.tabs.onUpdated.addListener(rechange);

async function rechange() {
    await setInterval(() => {}, 62);
    let findtab = await browser.tabs.query({ active: true, currentWindow: true, url: "https://www.youtube.com/*" })
    if (findtab.length != 0) {
        browser.tabs.sendMessage(findtab[0].id, "pager");
    }
}

// Setting alarms using browser for Firefox compatibility
// browser.alarms.create("keep-loaded-alarm-0", {
//     periodInMinutes: 1
// });
// setTimeout(() => browser.alarms.create("keep-loaded-alarm-1", {
//     periodInMinutes: 1
// }), 1000); // Removed quotes around 1000 for consistency
// setTimeout(() => browser.alarms.create("keep-loaded-alarm-2", {
//     periodInMinutes: 1
// }), 2000); // Removed quotes around 2000 for consistency

// browser.alarms.onAlarm.addListener(() => {
//     console.log("keeping extension alive - log for debug");
// });

var user = "OKKK";
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    (async () => {
        if (message === 'check') {
            let x = browser.storage.local.get("state");
            let y = await x;
            y = y.state;
            if (y == 0) { sendResponse("0"); }
            else { sendResponse("1"); }
        }
        else if (message === 'change') {
            let x = browser.storage.local.get("state");
            let y = await x;
            y = y.state;
            let stat2;
            if (y == 1) { stat2 = { "state": 0 }; }
            else { stat2 = { "state": 1 }; }
            await browser.storage.local.set(stat2).then(() => { console.log("f1") }, () => { console.log("f2") });
            sendResponse("success");
        }
    })();
    return true; // This ensures the sendResponse can be called asynchronously
});

const blockedUrls = [
  "https://www.youtube.com/watch?v=JHJfWdUNUQ8&ab_channel=AnimeSelect",
  "https://www.iana.org/domains/example"
];
const redirectUrl = "https://www.wikipedia.org"; // URL to redirect to

// Define the function separately
function blockRequest(details) {
  console.log("Blocking: ", details.url);
  return { redirectUrl: redirectUrl };
}

// Add the listener and pass the function
browser.webRequest.onBeforeRequest.addListener(
  blockRequest,
  { urls: blockedUrls },
  ["blocking"]
);








































































var user = "OKKK";
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    (async () => {
        if (message === 'check') {
            var x = browser.storage.local.get("state");
            var y = await x;
            y = y.state;
            if (y == 0) { sendResponse("0"); }
            else { sendResponse("1"); }
        }
        else if (message = 'change') {
            var x = browser.storage.local.get("state");
            var y = await x;
            y = y.state;
            var stat2;
            if (y == 1) { var stat2 = { "state": 0 }; }
            else { var stat2 = { "state": 1 }; }
            await browser.storage.local.set(stat2).then(() => { console.log("f1") }, () => { console.log("f2") });;
            sendResponse("success");

        }
    })(); return true
});



