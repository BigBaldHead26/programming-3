var socket = io();
let side = 25;


function setup() {
        frameRate(20);
        createCanvas(25 * side, 25 * side);
}

function paint(matrix) {
        for (var y = 0; y < matrix.length; y++) {
                for (var x = 0; x < matrix[y].length; x++) {
                    var toBot = side - side * 0.3
                    textSize(toBot);
                    if (matrix[y][x] == 1) {
                        fill("green");
                        rect(x * side, y * side, side, side);
                        text('☘️', x * side, y * side + toBot);
                    }
                    else if (matrix[y][x] == 2) {
                        fill("yellow");
                        rect(x * side, y * side, side, side);
                        text('🍂', x * side, y * side + toBot);
                    }
                    else if (matrix[y][x] == 3) {
                        fill("red");
                        rect(x * side, y * side, side, side);
                        text('💥', x * side, y * side + toBot);
                    }else if(matrix[y][x] == 4){
                        fill("purple");
                        rect(x * side, y * side, side, side);
                        text('🍇', x * side, y * side + toBot);
                    }
                    else if(matrix[y][x] == 5){
                        fill("aqua");
                        rect(x * side, y * side, side, side);
                        text('🌪', x * side, y * side + toBot);
                    }
                    
                    else {
                        fill("Teal")
                        rect(x * side, y * side, side, side)
                    }
                }
            }
                

}

setInterval(
        function () {
        socket.on('send matrix', paint)
        },1000
    )