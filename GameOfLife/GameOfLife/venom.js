class Venom {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.energy = 30;
        this.direction = []
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(char1,char2){
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char1) {
                    found.push(this.directions[i]);
                } 
                if (matrix[y][x] == char2) {
                    found.push(this.directions[i]);
                } 
         
            }

        }
        return found;
    }

    mul() {
        let emptyCell = this.chooseCell(0)
        let newCell = random(emptyCell)

        if (newCell ) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 4

            let ven = new Venom(newX, newY)

            venomArr.push(ven)
        }
    }


    eat() {
        let foods = this.chooseCell(1,2)
        let food = random(foods)
        if (food) {
            this.energy++;

            matrix[this.y][this.x] = 0
          
          
            let newX = food[0]
            let newY = food[1]
           
           
            matrix[newY][newX] = 4


            for (var i in grassArray) {
                if (newX == grassArray[i].x && newY == grassArray[i].y) {
                    grassArray.splice(i, 1);
                    break;
                }
            }

            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }


            if (this.energy >= 10) {
                this.mul()
            }



            this.x = newX
            this.y = newY
        }
    }

    


    die() {
        
        matrix[this.y][this.x] = 0;
        for (var i in venomArr) {
            if (this.x == venomArr[i].x && this.y == venomArr[i].y) {
                venomArr.splice(i, 1);
                console.log("die i mej", venomArr);
                break;
            }
        }
    }
}