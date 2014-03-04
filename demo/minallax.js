(function(){
    "use strict";
    var minallaxElement;
    var minallaxElementTop;

    var minallaxScroll = function () {
        var newTop = minallaxElementTop - window.scrollY * 0.5;
        minallaxElement.style.top = newTop + "px";
    };

    var scrollTo = function (scrollTarget, duration) {
        if (duration === 0) {
            return;
        }
        var scrollPerTick = (scrollTarget - window.scrollY) / duration * 10;
        setTimeout(function() {
            window.scrollTo(window.scrollY, window.scrollY + scrollPerTick);
            scrollTo(scrollTarget, duration - 5);
        }, 5);
    };

    var init = function () {
        if (document.readyState !== "complete") {
            return;
        }
        clearInterval(interval);
        minallaxElement = document.getElementById("minallax");
        minallaxElementTop = minallaxElement.offsetTop;
        minallaxScroll();
        window.onscroll = minallaxScroll;
    };

    var interval = setInterval(init, 100);
}());