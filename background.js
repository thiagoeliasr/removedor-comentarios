chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.greeting == "init") {
            chrome.browserAction.setBadgeText({text: ""});
            sendResponse({farewell: "init done"});
        }

        if (request.greeting == "removed"){
            chrome.browserAction.setBadgeText({text: "✓"});
            sendResponse({farewell: "done"});
        }
    }
);
