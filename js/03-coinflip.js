let coinFlip = Math.round(Math.random())
let choice = prompt('Please select Heads or Tails')
if (choice === 'Heads' || choice === 'heads' || choice === 'HEADS'){
    if (coinFlip < 1){
        document.write('The flip was heads and you chose heads...you win!')
    }
    else {
        document.write('The flip was tails but you chose heads...you lose!')
    }
}
else if (choice === 'Tails' || choice === 'tails' || choice === 'TAILS'){
    if (coinFlip < 1){
        document.write('The flip was heads but you chose tails...you lose!')
    }
    else {
        document.write('The flip was tails and you chose tails...you win!')
    }
}
else {
    document.write('Invalid input')
}