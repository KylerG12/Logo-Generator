// Variables
const fs = require("fs");
const inq = require("inquirer");

//Classes
class Shape {
  constructor() {
    (this.letters = ""), (this.colorText = ""), (this.colorShape = "");
  }
  setLetters(letters) {
    this.letters = letters;
  }
  setShapeColor(colorShape) {
    this.colorShape = colorShape;
  }
  setTextColor(colorText) {
    this.colorText = colorText;
  }
}

class Circle extends Shape {
  render() {
    return `
    <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="100" fill="${this.colorShape}" />
        <text x="150" y="115" font-size="60" text-anchor="middle" fill="${this.colorText}">${this.letters}</text>
        </svg>`;
  }
}

class Triangle extends Shape {
  render() {
    return `
    <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
        <polygon points= "150,10 300,190 0,190" fill="${colorShape}" />
        <text x="150" y="140" font-size="60" text-anchor="middle" fill="${colorText}">${letters}</text>
        </svg>`;
  }
}

class Square extends Shape {
  render() {
    return `
        <svg version="1.1"
                width="200" height="200"
                xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="${colorShape}" />
            <text x="100" y="120" font-size="60" text-anchor="middle" fill="${colorText}">${letters}</text>
            </svg>`;
  }
}

//Logic
inq
  .prompt([
    {
      type: "input",
      message: "Enter up to three characters",
      name: "letters",
    },
    {
      type: "input",
      message: "Enter a color name or hexadecimal code for your text",
      name: "colorText",
    },
    {
      type: "checkbox",
      message: "Select one of the following shapes",
      choices: ["Circle", "Triangle", "Square"],
      name: "shapeChoice",
    },
    {
      type: "input",
      message: "Enter a color name or hexadecimal code for your shape",
      name: "colorShape",
    },
  ])
  .then((response) => {
    rend(response);
  });

// Functions
function rend(response) {
  if (response.shapeChoice == "Circle") {
    const circ = new Circle();
    circ.setLetters(response.letters);
    circ.setShapeColor(response.colorShape);
    circ.setTextColor(response.colorText);
    fs.writeFile(
      `${response.letters}-logo.svg`,
      
      `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="100" fill="${response.colorShape}" />
<text x="150" y="115" font-size="60" text-anchor="middle" fill="${response.colorText}">${response.letters}</text>
</svg>`,

      (err) => (err ? console.error(err) : console.log("Generated logo.svg"))
    );
  } else if (response.shapeChoice == "Triangle") {
    const tri = new Triangle();
    tri.setLetters(response.letters);
    tri.setShapeColor(response.colorShape);
    tri.setTextColor(response.colorText);
    fs.writeFile(
      `${response.letters}-logo.svg`,
      
      `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
<polygon points= "150,10 300,190 0,190" fill="${response.colorShape}" />
<text x="150" y="140" font-size="60" text-anchor="middle" fill="${response.colorText}">${response.letters}</text>
</svg>`,

      (err) => (err ? console.error(err) : console.log("Generated logo.svg"))
    );
  } else if (response.shapeChoice == "Square") {
    const squ = new Square();
    squ.setLetters(response.letters);
    squ.setShapeColor(response.colorShape);
    squ.setTextColor(response.colorText);
    fs.writeFile(
      `${response.letters}-logo.svg`,
      
      `<svg version="1.1"
width="200" height="200"
xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="${response.colorShape}" />
<text x="100" y="120" font-size="60" text-anchor="middle" fill="${response.colorText}">${response.letters}</text>
</svg>`,

      (err) => (err ? console.error(err) : console.log("Generated logo.svg"))
    );
  } else {
    console.log("Please select a valid shape");
  }
}

// Exports
module.exports = { Shape, Circle, Triangle, Square };
