// input from user for what funciton to use
var userChosenFunction = process.argv[2]
var userChosenVariable = process.argv[3]

// console.log(userChosenFunction)
// console.log(userChosenVariable)

switch (userChosenFunction) {
  case 'spotify-this-song':
    testvariable(userChosenVariable)
    break
  case 'concert-this':
    testvariable(userChosenVariable)
    break
  case 'movie-this':
    break
  case 'do-what-it-says':
    break
}

// testing functions
function testvariable (input) {
  console.log(`you chose to: ` + userChosenFunction)
  console.log(input)
}
