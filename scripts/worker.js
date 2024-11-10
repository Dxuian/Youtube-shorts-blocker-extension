// worker.js
self.onmessage = async function(event) {
    const { message, state } = event.data;
    console.log(message, state);
    console.log("hello from worker script 1");
    if (message === "changetype") {
        // if (state === 0) {
        //     var k = document.querySelectorAll("a[href*='/shorts']");
        //     for (let card = 0; card < k.length; card++) {
        //         try {
        //             k[card].parentElement.parentElement.hidden = "true";
        //         } catch {
        //             k[card].parentElement.hidden = "true";
        //         }
        //     }
        // } else if (state === 1) {
        //     var k = document.querySelectorAll("a[href*='/shorts']");
        //     for (let card = 0; card < k.length; card++) {
        //         try {
        //             k[card].parentElement.parentElement.removeAttribute('hidden');
        //         } catch {
        //             k[card].parentElement.removeAttribute('hidden');
        //         }
        //     }
        // }
        postMessage("made changes");
    } else if (message === "pager") {
        // if (state === 1) {
        //     if (window.location.href.includes("youtube.com/shorts") === true) {
        //         window.history.back();
        //     }
        //     var k = document.querySelectorAll("a[href*='/shorts']");
        //     for (let card = 0; card < k.length; card++) {
        //         try {
        //             k[card].parentElement.parentElement.hidden = "true";
        //         } catch {
        //             k[card].parentElement.hidden = "true";
        //         }
        //     }
        // } else if (state === 0) {
        //     var k = document.querySelectorAll("a[href*='/shorts']");
        //     for (let card = 0; card < k.length; card++) {
        //         try {
        //             k[card].parentElement.parentElement.removeAttribute('hidden');
        //         } catch {
        //             k[card].parentElement.removeAttribute('hidden');
        //         }
        //     }
        // }
        postMessage("made changes");
    }
};