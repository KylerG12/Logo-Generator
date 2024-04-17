const { Circle } = require(`../shapes`);

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
