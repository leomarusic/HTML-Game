function startGame() {
    myGameArea.start();
    
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 720;
        this.canvas.height = 800;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
ctx = myGameArea.context;
var rectX = 340;
function moveRec() {
    const ctx = myGameArea.context;
    ctx.beginPath();
    ctx.fillStyle = "red";
    if (rectX < 0) {
        rectX = 0;
    } else if (rectX > 680) {
        rectX = 680;
    }
    ctx.fillRect(rectX, 750, 40, 40);
}

function updateGameArea() {
    myGameArea.clear();
    moveRec();
}
bulletY = 700;
function fireBullet(){
    const ctx = myGameArea.context;
    bullet = ctx.fillRect(rectX + 10, bulletY, 20, 30);
    moveBullet();
}
function moveBullet(){
    const ctx = myGameArea.context;
    bulletY = bulletY-20;
    bullet = ctx.fillRect(rectX + 10, bulletY, 20, 30);
    if(bullet.bulletY<0){
        bullet.clearRect();
    }
}
function onkeydown(e) {
    if (e.keyCode == 39) {
        rectX=rectX+10;
        moveRect();
    } //right arrow
    else if (e.keyCode == 37) {
        rectX=rectX-10;
        moveRect();
    } //left arrow
    if(e.keyCode == 32){
        fireBullet();
    }
}
window.addEventListener("keydown", onkeydown);