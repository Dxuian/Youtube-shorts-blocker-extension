if (typeof browser === "undefined") {
    var browser = chrome;
}
browser.runtime.onInstalled.addListener(async () => {
    keep = 0;
    var stat1 = { "state": 0 };
    await browser.storage.local.set(stat1).then(() => { console.log("f1") }, () => { console.log("f2") });
}
)
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
        else if(message='change')
        {
            var x = browser.storage.local.get("state");
            var y = await x;
            y = y.state;
            
            var stat2;
            if(y==1){ var stat2 = { "state": 0 };}
            else{ var stat2 = { "state": 1 };}
            await browser.storage.local.set(stat2).then(() => { console.log("f1") }, () => { console.log("f2") }); ; 
            sendResponse("success");

        }
    })(); return true
});





