// 1. Copy and paste your prototype in here and refactor into class syntax.


class CuboidMakerClass{
    constructor(attrs) {
    this.length = attrs.length;
    this.width = attrs.width;
    this.height = attrs.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return 2 * ((this.length * this.width) + (this.length * this.height) + (this.height * this.width));
  }
}

class CubeMaker extends CuboidMakerClass{
    constructor(attrs){
        super(attrs)
    }
}

const cuboidClass = new CuboidMakerClass({
    length: 4, 
    width: 5, 
    height: 5,
});

const cube = new CubeMaker({
    length: 3,
    width: 3,
    height: 3,
});


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidClass.volume()); // 100
console.log(cuboidClass.surfaceArea()); // 130
console.log(cube.volume());
console.log(cube.surfaceArea());

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

//the formulas are the same, yo. 