let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
let fs = require("fs");
const Antivenom = require('../GameOfLife/antivenom');
const Grass = require('../GameOfLife/grass');
const GrassEater = require('../GameOfLife/grassEater');
const Preadator = require('../GameOfLife/preadator');
const Venom = require('../GameOfLife/venom');

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000, () => {
    console.log('connected');
});

function matrixGenerator(matrixSize, grassCount, grassEaterCount, preadatorCount, venomCount, antivenomCount) {
    let matrix = [];
    for (let i = 0; i < matrixSize; i++) {
            matrix.push([]);
            for (let j = 0; j < matrixSize; j++) {
                    matrix[i].push(0);
            }
    }
    //grass
    for (let i = 0; i < grassCount; i++) {
            let x = Math.floor(Math.random() * matrixSize);
            let y = Math.floor(Math.random() * matrixSize);
            matrix[y][x] = 1
    }

    // Randomly place two 2's in the matrix (only once)
    //grasEater
    for (let i = 0; i < grassEaterCount; i++) {
            let x = Math.floor(Math.random() * matrixSize);
            let y = Math.floor(Math.random() * matrixSize);
            matrix[y][x] = 2
    }

    //preadator
    for (let i = 0; i < preadatorCount; i++) {
            let x = Math.floor(Math.random() * matrixSize)
            let y = Math.floor(Math.random() * matrixSize)
            matrix[y][x] = 3
    }

    //venom
    for (let i = 0; i < venomCount; i++) {
            let x = Math.floor(Math.random() * matrixSize)
            let y = Math.floor(Math.random() * matrixSize)
            matrix[y][x] = 4
    }

    for (let i = 0; i < antivenomCount; i++) {
            let x = Math.floor(Math.random() * matrixSize)
            let y = Math.floor(Math.random() * matrixSize)
            matrix[y][x] = 5
    }

    return matrix;
}

matrix = matrixGenerator(25, 70, 4, 2, 2, 8);

io.sockets.emit('send matrix', matrix)

grassArray = [];
grassEaterArr = [];
preadatorArr = [];
venomArr = [];
antivenomArr = [];

Grass = require('./grass');
GrassEater = require('./grassEater');
Preadator = require('./preadator');
Venom = require('./venom');
Antivenom = require('./antivenom');

function createObject(matrix) {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[0].length; x++) {
                //Grass
                if (matrix[y][x] == 1) {
                        let gr = new Grass(x, y);
                        grassArray.push(gr);
                }
                //GrassEate
                else if (matrix[y][x] == 2) {
                        let gre = new GrassEater(x, y);
                        grassEaterArr.push(gre);
                }
                //Preadaor
                else if (matrix[y][x] == 3) {
                        let pred = new Preadator(x, y);
                        preadatorArr.push(pred);
                }
                //Venom
                else if (matrix[y][x] == 4) {
                        let ven = new Venom(x, y);
                        venomArr.push(ven);
                }
                //Antivenom
                else if (matrix[y][x] == 5) {
                        let anv = new Antivenom(x, y);
                        antivenomArr.push(anv);
                }
        }
    }   

    io.sockets.emit('send matrix', matrix);

}


function gamePlay() {
    
}