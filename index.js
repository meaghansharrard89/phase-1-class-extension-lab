

// Your code here
class Polygon {
    constructor(array){
        this.array = array;
    }

    get countSides(){
        let length = this.array.length;
        return length;
    }

    get perimeter(){
        let sum = 0;
        for (let i = 0; i < this.array.length; i++) {
            sum+=this.array[i];
        }
        return sum;
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.array[0] + this.array[1] < this.array[2]) {
            return false;
        } if (this.array[1] + this.array[2] < this.array[0]) {
            return false;
        } if (this.array[2] + this.array[0] < this.array[1]) {
            return false;
        } else {
            return true;
        }
    }
}

class Square extends Polygon {
    get isValid() {
        const referenceElement = this.array[0];
        for (let i = 1; i < this.array.length; i++){
            if (this.array[i] !== referenceElement) {
                return false;
            }
        }
        return true;
    }
    
    get area() {
        return this.array[0] * this.array[0];
    }

}