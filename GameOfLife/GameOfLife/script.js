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

let matrix = matrixGenerator(25, 70, 4, 2, 2, 8);
let side = 25;
let grassArray = [];
// GrassEater
let grassEaterArr = [];
let preadatorArr = [];
let venomArr = [];
let antivenomArr = [];

function setup() {
        frameRate(10);

        createCanvas(matrix[0].length * side, matrix.length * side);
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[0].length; x++) {
                        //Grass
                        if (matrix[y][x] == 1) {
                                let gr = new Grass(x, y)
                                grassArray.push(gr);
                        }
                        //GrassEate
                        else if (matrix[y][x] == 2) {
                                let gre = new GrassEater(x, y)
                                grassEaterArr.push(gre);
                        }
                        //Preadaor
                        else if (matrix[y][x] == 3) {
                                let pred = new Preadator(x, y)
                                preadatorArr.push(pred);
                        }
                        //Venom
                        else if (matrix[y][x] == 4) {
                                let ven = new Venom(x, y)
                                venomArr.push(ven);
                        }
                        //Antivenom
                        else if (matrix[y][x] == 5) {
                                let anv = new Antivenom(x, y)
                                antivenomArr.push(anv);
                        }
                }
        }

}

function draw() {
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
                for (var i in grassArray) {
                grassArray[i].mul();
        }

        // grassEater
        for (let index = 0; index < grassEaterArr.length; index++) {
                grassEaterArr[index].eat();
        }

        //preadator

        for (let i in preadatorArr) {
                preadatorArr[i].eat();
        }

        for (let i in venomArr) {
                venomArr[i].eat();

                        let test = setTimeout(() => {
                                venomArr[i].die();


                        }, 13000);
                        console.log(venomArr.length, matrix)
                        if (venomArr.length <= 0) {
                                clearTimeout(test)
                        }
                





        }



        for (let i in antivenomArr) {
                antivenomArr[i].eat();
        }
}

// const obj = {
//         firstName: 'Karo',
//         lastName: 'Mkrtchyan',
//         age: 14,
//         isStudent: true,
//         showInfo() {
//                 console.log(this.lastName, this.age);
//         }
// }
// obj.showInfo();