// This is our Application's class called Calculator
class Calculator {
    constructor(previousOperationField, currentOperationField) {
        this.previousOperationField = previousOperationField
        this.currentOperationField = currentOperationField
        this.currentOperation = ""
    }

    // This functionality adds the digit in the current operation property
    addDigit(digit) {
        // This conditional statement checks if already has a dot in the property
        if (digit === "." && this.currentOperation.innerText.includes(".")) {
            return
        }
        this.currentOperation = digit
        this.updateScreen()
    }

    // This functionality process all of the numbers according to the operating signal
    processOperation(operation) {
        // Checking if currently is empty
        if (this.currentOperationField.innerText === "" && operation !== "C") {
            // Checking if the previous value isn't empty
            if (this.previousOperationField.innerText !== "") {
                // Waiting if it will change the operation
                this.changeOperation(operation)
            }
            return
        }

        // Declaring the variable will be used to stores the result
        let operationValue
        // Declaring constants to get the values in the calculator screen
        const previousValue = Number(this.previousOperationField.innerText.split(" ")[0])
        const currentValue = Number(this.currentOperationField.innerText)

        // This statement called "Switch Case" checks the operation sign and process the digits
        switch (operation) {
            case "+":
                operationValue = previousValue + currentValue
                this.updateScreen(operationValue, operation, currentValue, previousValue)
                break
            case "-":
                operationValue = previousValue - currentValue
                this.updateScreen(operationValue, operation, currentValue, previousValue)
                break
            case "*":
                operationValue = previousValue * currentValue
                this.updateScreen(operationValue, operation, currentValue, previousValue)
                break
            case "/":
                operationValue = previousValue / currentValue
                this.updateScreen(operationValue, operation, currentValue, previousValue)
                break
            case "=":
                this.showResult()
                break
            case "CE":
                this.deleteCurrentOperation()
                break
            case "C":
                this.deleteAll()
                break
            case "DEL":
                this.deleteDigit()
                break
            default:
                return
        }
    }

    // This functionality updates the calculator screen
    updateScreen(operationValue = null, operation = null, currentValue = null, previousValue = null) {
        console.log(`Resultado da Operação: ${operationValue}, Sinal da Operação: ${operation}, Valor da Operação Atual: ${currentValue}, Valor da Operação Anterior: ${previousValue}`)

        // This conditional statement checks if has nothing to add the digits in the screen
        if (operationValue === null) {
            this.currentOperationField.innerText += this.currentOperation
        } else {
            // This conditional statement checks if the previous value is zero
            if (previousValue === 0) {
                // Setting the operation result value as current value
                operationValue = currentValue
            }
            this.previousOperationField.innerText = `${operationValue} ${operation}`
            this.currentOperationField.innerText = ""
        }
    }

    // This funcionality changes the operations if the user wants to
    changeOperation(operation) {
        // List of math operations allowed
        const mathOperations = ["+", "-", "*", "/"]
        // Checking if the operation is allowed
        if (!mathOperations.includes(operation)) {
            return
        }
        // This changes the operation
        this.previousOperationField.innerText = this.previousOperationField.innerText.slice(0, -1) + operation
    }

    // This functionality deletes the last digit in the current operation field
    deleteDigit() {
        this.currentOperationField.innerText = this.currentOperationField.innerText.slice(0, -1)
    }

    // This functionality deletes all of the digits in the current operation field
    deleteCurrentOperation() {
        this.currentOperationField.innerText = ""
    }

    // This functionality deletes all operations and digits
    deleteAll() {
        this.currentOperationField.innerText = ""
        this.previousOperationField.innerText = ""
    }

    // This functionality shows the result of arithmetic expression
    showResult() {
        const operationSign = this.previousOperationField.innerText.split(" ")[1]
        this.processOperation(operationSign)
    }
}