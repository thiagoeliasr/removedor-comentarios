(function() {
    reset()
    rules.forEach((el, ix) => {
        removeElement(document.querySelector(el))
    })
})();

function reset() {
    chrome.runtime.sendMessage({greeting: "init"}, function(response) {
        console.log(response);
    });
}

function removeElement(element) {
    if (element) {
        element.parentNode.removeChild(element);
        chrome.runtime.sendMessage({greeting: "removed"}, function(response) {
            console.log(response);
        });

        return;
    }
}
