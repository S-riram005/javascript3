const game = document.getElementById("game");
const ball = document.getElementById("ball");
let startX, startY;

// touch start event
game.addEventListener("touchstart", function(e) {
    const touch = e.changedTouches[0];
    startX = touch.clientX;
    startY = touch.clientY;
});

// touch move event
game.addEventListener("touchmove", function(e) {
    const touch = e.changedTouches[0];
    const diffX = touch.clientX - startX;
    const diffY = touch.clientY - startY;

    // Move the ball (stay inside box)
    ball.style.left = Math.max(0, Math.min(375, ball.offsetLeft + diffX)) + "px";
    ball.style.top = Math.max(0, Math.min(175, ball.offsetTop + diffY)) + "px";

    startX = touch.clientX;
    startY = touch.clientY;

    e.preventDefault(); // stop scrolling
});
