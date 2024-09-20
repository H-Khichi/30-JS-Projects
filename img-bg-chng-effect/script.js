var imgBox = document.querySelector(".img-box");
var imgWrap = document.querySelector(".img-wrap");
var leftSpace = imgBox.offsetLeft;
var origionalImg = document.getElementById("origionalImg");
var line = document.getElementById("line");

// Set the width of the original image to match the imgBox
origionalImg.style.width = imgBox.offsetWidth + "px";

// Variables to track dragging state
var isDragging = false;

imgBox.onmousemove = function (e) {
    if (isDragging) {
        var boxWidth = (e.pageX - leftSpace) + "px";

        // Ensure the boxWidth is within the imgBox boundary
        if (e.pageX >= leftSpace && e.pageX <= (imgBox.offsetWidth + leftSpace)) {
            imgWrap.style.width = boxWidth;
            line.style.left = boxWidth;
        }
    }
};

// Start dragging on mousedown event on the line
line.onmousedown = function (e) {
    isDragging = true;
    document.body.style.cursor = "ew-resize";  // Change cursor to show resizing
};

// Stop dragging on mouseup event
document.onmouseup = function () {
    isDragging = false;
    document.body.style.cursor = "default";  // Revert cursor style
};
