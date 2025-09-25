let num = Number(prompt('Enter the number between 1 and 100'))
if (num >= 90 && num <= 100) {
    document.write('You received an A')
}
else if (num >= 80 && num <= 89) {
    document.write('You received an B')
}
else if (num >= 70 && num <= 79) {
    document.write('You received an C')
}
else if (num >= 60 && num <= 69) {
    document.write('You received an D')
}
else if (num >= 1 && num <= 60) {
    document.write('You received an F')
}
else {
    document.write('Only numbers between 1 and 100 are accepted')
}
