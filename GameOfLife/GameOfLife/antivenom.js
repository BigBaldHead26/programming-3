class Antivenom {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.energy = 50;
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

    chooseCell(char4) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char4) {
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

            matrix[newY][newX] = 5

            let anv = new Antivenom(newX, newY)

            antivenomArr.push(anv)
        }
    }

    eat() {
        let foods = this.chooseCell(4)
        let food = random(foods)
        if (food) {
            this.energy++;

            matrix[this.y][this.x] = 0
            let newX = food[0]
            let newY = food[1]
            matrix[newY][newX] = 5
            this.x = newX
            this.y = newY

            for (var i in venomArr) {
                if (newX == venomArr[i].x && newY == venomArr[i].y) {
                    venomArr.splice(i, 1);
                    break;
                }
            }

        }
        else {
            this.move()
        }
    }

    move() {
        this.energy--
        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 5
            this.x = newX
            this.y = newY
        }

        if (this.energy <= 0) {
            this.die()
        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in antivenomArr) {
            if (this.x == antivenomArr[i].x && this.y == antivenomArr[i].y) {
                antivenomArr.splice(i, 1);
                break;
            }
        }
    }
}