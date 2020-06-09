//Selectors
const largerFlexContainer = document.querySelector(".flex-container")
const smallerFlexContainer = document.querySelector(".flex-container-longer")
const textField = document.querySelector(".calField")

//Variables
let total = 0
let operation = 'nothing'
let calculatorInput = []
let canGo = true

var operators = {
    '+': function(a, b){ return a+b},
    '-': function(a, b){ return a-b},
    '*': function(a, b){ return a*b},
    '/': function(a, b){ return a/b},
}

//Creating Events
largerFlexContainer.addEventListener('click', function testFuncion(e) {
    doSomething(e)
})
smallerFlexContainer.addEventListener('click', function testFuncion(e) {
    doSomething(e)
})

function doSomething(e) {
    //if it is not a correct button then do nothing
    event.preventDefault()
    if (e.target.innerHTML.length != 1) { return }
    //else continue with the button you just pressed
    switch (e.target.innerHTML) {
        case "x":
            operation = "*"
            addTotalToCalculatorInputArray()
            break
        case "÷":
            operation = "/"
            addTotalToCalculatorInputArray()
            break
        case "+":
            operation = "+"
            addTotalToCalculatorInputArray()
            break
        case "-":
            operation = "-"
            addTotalToCalculatorInputArray()
            break
        case "C":
            reset()

            break
        case "=":
            if (total == textField.innerHTML) { return }
            addTotalToCalculatorInputArray()
            total = operators[operation](calculatorInput[0], calculatorInput[1])
            calculatorInput = []
            textField.innerHTML = total
            canGo = false
            break
        case ".":
            if (canGo == false) { reset() }
            if (total.includes(".")) { return }
        default:
            if (canGo == false) { reset() }
            if (total.length == 14 ) { return }
            total+= e.target.innerHTML 
            textField.innerHTML = total.substring(1)
    }
}

function reset() {
    total = 0
    calculatorInput = []
    textField.innerHTML = ""
    canGo = true
}

function addTotalToCalculatorInputArray() {
    // if (total[total.length-1] == "." ) {total = total.substring(0, total.length - 1);}
    calculatorInput.push(total)
    total = 0
    textField.innerHTML = ""
    canGo = true
}