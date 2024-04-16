// Variables
const fs = require("fs");
const inq = require("inquirer");

class Shape {
  constructor(letters, colorText, colorShape) {
    (this.letters = letters),
      (this.colorText = colorText),
      (this.colorShape = colorShape);
  }
}

class Circle extends Shape {
  constructor(letters, colorText, colorShape, shapeChoice) {
    super(letters, colorText, colorShape), (shapeChoice = "Circle");
  }
}

class Triangle extends Shape {
  constructor(letters, colorText, colorShape, shapeChoice) {
    super(letters, colorText, colorShape), (shapeChoice = "Triangle");
  }
}

class Square extends Shape {
  constructor(letters, colorText, colorShape, shapeChoice) {
    super(letters, colorText, colorShape), (shapeChoice = "Square");
  }
}

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
    render(response);
  });

// Functions
function render(response) {
  if (response.shapeChoice == "Circle") {
    fs.writeFile(
      `${response.letters}-logo.svg`,
      `
<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="100" fill="${response.colorShape}" />
    <text x="150" y="115" font-size="60" text-anchor="middle" fill="${response.colorText}">${response.letters}</text>
    </svg>`,

      (err) => (err ? console.error(err) : console.log("Generated logo.svg"))
    );
  } else if (response.shapeChoice == "Triangle") {
    fs.writeFile(
      `${response.letters}-logo.svg`,
      `
    <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
        <polygon points= "150,10 300,190 0,190" fill="${response.colorShape}" />
        <text x="150" y="140" font-size="60" text-anchor="middle" fill="${response.colorText}">${response.letters}</text>
        </svg>`,

      (err) => (err ? console.error(err) : console.log("Generated logo.svg"))
    );
  } else if ((response.shapeChoice == "Square")) {
    fs.writeFile(
      `${response.letters}-logo.svg`,
      `
        <svg version="1.1"
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
module.exports = render;
module.exports = Circle, Triangle, Square;
