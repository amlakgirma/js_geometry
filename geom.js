class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare() {
    return (this.length === this.width);
  }
  area() {
    return (this.length * this.width);
  }
  perimeter(){
     return( 2 * (this.lenght + this.width ));
  }
}

let rect = new Rectangle(5, 15);



class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilatera(){

    return((this.sideA ==this.sideB && this.sideB==this.sideC))

}
  isIsosceles() {
  return  (this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC);
  }
  isobtuse(){
    if(this.sideA === this.sideB && this.sideA === this.sideC && this.sideB === this.sideC){
      return false;
    }else{
         if(this.sideA ==this.sideB )
           return true;
          if(this.sideB == this.sideC)
          return true;
          if(this.sideA == this.sideC)
          return true;
        }

  }
}
let tri = new Triangle(6,5,5);
//=============================================
class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
