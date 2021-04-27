function createImage() {
    var canvas = document.getElementById('my_canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        ctx.fillRect(20, 20, 100, 100);
        ctx.clearRect(40, 40, 60, 60);
        ctx.fillStyle = "red";
        ctx.fillRect(150, 20, 200, 50);
        ctx.fillStyle = "green";
        ctx.fillRect(160, 30, 200, 50);
        ctx.fillStyle = "blue";
        ctx.fillRect(170, 40, 200, 50);
        ctx.fillStyle = "blue";
        ctx.fillRect(400, 10, 20, 150);
        ctx.fillStyle = "green";
        ctx.fillRect(400, 10, 20, 50);
        ctx.fillStyle = "blue";
        ctx.fillRect(440, 50, 20, 110);
        ctx.fillStyle = "green";
        ctx.fillRect(440, 50, 20, 40);
        ctx.fillStyle = "blue";
        ctx.fillRect(480, 30, 20, 130);
        ctx.fillStyle = "green";
        ctx.fillRect(480, 30, 20, 30);

    }
}