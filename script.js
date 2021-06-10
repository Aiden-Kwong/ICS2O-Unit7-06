// Selects a random number between 1 and 20, then rounds it to an integer.
let randomAge = Math.floor(Math.random() * 20 + 1)
randomAge = parseInt(randomAge)
console.log(randomAge)

let userGuess = null

// Loops until userGuess = randomAge
do {
  // Prompts user to enter a number.
  let userGuess = prompt('Guess my age!', 'Enter a number here')
  userGuess = parseInt(userGuess)

  // If the guess is equal to randomAge:
  if (userGuess === randomAge) {
    console.log('correct')

    // Send an alert telling the user their guess was correct.
    alert('Correct!')

    // Ask about playing again, answers are y/n.
    let playAgain = prompt('Want to play again? (Y/N)')
    playAgain = playAgain.toUpperCase()

    // If user responds with y, re-roll randomAge and start again.
    if (playAgain === 'Y') {
      randomAge = Math.floor(Math.random() * 20 + 1)
      userGuess = null

    // If user responds with anything else, end the loop.
    } else {
      break
    }
  
  // If the guess is less than randomAge, send an alert letting the user know.
  } else if (userGuess < randomAge) {
    console.log('toolow')
    alert('Too low')
  
  // If the guess is greater than randomAge, let the user know with an alert.
  } else if (userGuess > randomAge) {
    console.log('toohigh')
    alert('Too high')

  // If none of the above conditions are fulfilled, notify that the guess was invalid, then ask if the user wants to stop.
  } else {
    console.log('invalid')
    alert('Invalid guess.')
    let playAgain = prompt('Do you still wish to play? (Y/N)')
    playAgain = playAgain.toUpperCase()
    // If the user responds with anything but Y (meaning they wish to continue), end the loop.
    if (playAgain !== 'Y') {
      break
    }
  }
} while (userGuess != randomAge)
