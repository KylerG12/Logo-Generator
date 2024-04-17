const { Circle, Triangle, Square } = require(`../shapes`);

describe(`Circle`, () => {
  describe(``, () => {
    it(`should properly print the svg string for a circle`, () => {
      const string = `<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="100" fill="blue" />
      <text x="150" y="115" font-size="60" text-anchor="middle" fill="blue">kdc</text>
      </svg>`;
      const stringRend = string.replace(/\s/g, "");
      const circle = new Circle();
      circle.setLetters("kdc");
      circle.setShapeColor("blue");
      circle.setTextColor("blue");
      const circ = circle.render().replace(/\s/g, "");
      expect(circ).toEqual(stringRend);
    });
  });
});

describe(`Triangle`, () => {
  describe(``, () => {
    it(`should properly print the svg string for a triangle`, () => {
      const string = `<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
      <polygon points= "150,10 300,190 0,190" fill="blue" />
      <text x="150" y="140" font-size="60" text-anchor="middle" fill="blue">kdc</text>
      </svg>`;
      const stringRend = string.replace(/\s/g, "");
      const triangle = new Triangle();
      triangle.setLetters("kdc");
      triangle.setShapeColor("blue");
      triangle.setTextColor("blue");
      const tri = triangle.render().replace(/\s/g, "");
      expect(tri).toEqual(stringRend);
    });
  });
});

describe(`Square`, () => {
  describe(``, () => {
    it(`should properly print the svg string for a Square`, () => {
      const string = `<svg version="1.1"
      width="200" height="200"
      xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="blue" />
      <text x="100" y="120" font-size="60" text-anchor="middle" fill="blue">kdc</text>
      </svg>`;
      const stringRend = string.replace(/\s/g, "");
      const square = new Square();
      square.setLetters("kdc");
      square.setShapeColor("blue");
      square.setTextColor("blue");
      const squ = square.render().replace(/\s/g, "");
      expect(squ).toEqual(stringRend);
    });
  });
});
