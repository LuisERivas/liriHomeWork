// input from user for what funciton to use
var userChosenFunction = process.argv[2]
var userChosenVariable = process.argv[3]

// console.log(userChosenFunction)
// console.log(userChosenVariable)

switch (userChosenFunction) {
  case 'spotify-this-song':
    testvariable(userChosenVariable)
    // console.log(`1`) testing to make sure swith is working
    break
  case 'concert-this':
    testvariable(userChosenVariable)
    // console.log(`2`)
    break
  case 'movie-this':
    testvariable(userChosenVariable)
    // console.log(`3`)
    break
  case 'do-what-it-says':
    testvariable(userChosenVariable)
    // console.log(`4`)
    break
}

// testing functions
function testvariable (input) {
  console.log(`you chose to: ` + userChosenFunction)
  console.log(input)
}
