// There are three main constants of our Application
// They corresponds to calculator display
const previousOperationField = document.querySelector("div.prevent-operations")
const currentOperationField = document.querySelector("div.current-operations")
const buttons = document.querySelectorAll("div.buttons-container button")

// Creating an object by instantiating the calculator class
const calc = new Calculator(previousOperationField, currentOperationField)

// Traversing a node list of elements
buttons.forEach((button) => {
    // Adding a event listener of each button element
    button.addEventListener("click", (eventObject) => {
        // Extracting the value corresponding to the button clicked
        const buttonValue = eventObject.target.innerText
        
        // Conditional statement checks if the button value is number or operation
        if (Number(buttonValue) >= 0 || buttonValue === ".") {
            calc.addDigit(buttonValue)
        } else {
            calc.processOperation(buttonValue)
        }
    })
})