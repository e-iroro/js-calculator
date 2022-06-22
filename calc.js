let num1 = parseInt( prompt("Enter first number: "))
let num2 = parseInt( prompt("Enter second number: "))
operator = prompt("Select operation: + , - , / , * , ** , % ")

if (operator === "+") {
    alert("Your result is " + (num1 + num2))
} else if (operator === "-") {
    alert("Your result is " + (num1 - num2))
} else if (operator === "/") {
    alert("Your result is " + (num1 / num2))
} else if (operator === "*") {
    alert("Your result is " +  (num1 * num2))
} else if (operator === "**") {
    alert("Your result is " + (num1 ** num2))
} else if (operator === "%") {
    alert("Your result is " + (num1 % num2))
} else {
    alert("Invalid operation. Please try again")
}



