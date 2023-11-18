let side = 25;


function setup() {
        frameRate(10);
        createCanvas(25 * side, 25 * side);
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