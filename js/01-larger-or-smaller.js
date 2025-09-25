let num1 = Number(prompt('Enter the first integer'))
let num2 = Number(prompt('Enter the second integer'))
if (num1 === num2) {
    document.write('The numbers are same')
}
else if(num1 > num2) {
    document.write(`${num1} is larger`)
}
else if(num1 < num2) {
    document.write(`${num2} is larger`)
}
else {
    document.write('Invalid input')
}