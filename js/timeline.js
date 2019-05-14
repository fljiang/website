var items = document.getElementsByClassName("list-element");

function isElementInViewport(el) {
    // Returns the smallest rectangle that bounds the element
    var rect = el.getBoundingClientRect();
    return (
        // Return true if all sides are within viewport, otherwise return false
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

function isElementOutOfPort(el) {
    // Returns the smallest rectangle that bounds the element
    var rect = el.getBoundingClientRect();
    return (
        // Return true if bottom is within bounds
        rect.bottom < (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Callback func after every reaload, scroll, resize to check every list element to see if it's in view
function callbackFunc() {
    for(var i = 0; i < items.length; i++){
        if(isElementInViewport(items[i])) {
            items[i].classList.add("in-view");
        }
        else if(!isElementOutOfPort(items[i])){
            items[i].classList.remove("in-view");
        }

    }
}


// Run function on scroll and page load
window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);
window.addEventListener("resize", callbackFunc);
