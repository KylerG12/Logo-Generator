// Variables
const fs = require("fs");
const inq = require("inquirer");

inq.prompt([{
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
    name: "shapeChoice"
},
{
    type: "input",
    message: "Enter a color name or hexadecimal code for your shape",
    name: "colorShape"
}
])
.then(
    (response) => {
        if (response.shapeChoice  == "Circle"){   
        createCircle(response)
        } else if (response.shapeChoice == "Triangle"){
            createTriangle(response)
        } else if (response.shapeChoice == "Square"){
            createSquare(response)
        } else {
            console.log("Please select a valid shape")
        }
    }
    
)











// Functions
function createCircle(response) {
    fs.writeFile(`${response.letters}-logo.svg`,`
<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="100" fill="${response.colorShape}" />
    <text x="150" y="115" font-size="60" text-anchor="middle" fill="${response.colorText}">${response.letters}</text>
    </svg>`,

    (err) => (err ? console.error(err) : console.log("Generated logo.svg"))
)
};

function createTriangle(response) {
    fs.writeFile(`${response.letters}-logo.svg`,`
    <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
        <polygon points= "150,10 300,190 0,190" fill="${response.colorShape}" />
        <text x="150" y="140" font-size="60" text-anchor="middle" fill="${response.colorText}">${response.letters}</text>
        </svg>`,
        
        (err) => (err ? console.error(err) : console.log("Generated logo.svg"))
    )
    };

    function createSquare(response) {
        fs.writeFile(`${response.letters}-logo.svg`,`
        <svg version="1.1"
                width="200" height="200"
                xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="${response.colorShape}" />
            <text x="100" y="120" font-size="60" text-anchor="middle" fill="${response.colorText}">${response.letters}</text>
            </svg>`,
            
            (err) => (err ? console.error(err) : console.log("Generated logo.svg"))
        )
        };