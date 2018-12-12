(function() {

    init();

    let elements = [
        '#boxComentarios', //g1
        'section.box.social.comments' //extra
    ]

    elements.forEach((el, ix) => {
        removeElement(document.querySelector(el))
    })

})();

function init() {
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
    }
}
