// lowkey need a start game button for the initial number dumbutt

// create a score variable (global)
let score = 0
// create a

// function to start the game
score = 0

// generate a hidden next number and just pass it on after
    // number = newnumber type shi


// initial number
let computer = Math.ceil(Math.random()*10)
console.log("current: " + computer)
document.getElementById('currentnum').innerHTML = "Current number: " + computer
// button's function duh
function highlow() {
    // generate a random number between 1-10
    let computer = Math.ceil(Math.random()*10) 
    console.log("current: " + computer)
    document.getElementById('currentnum').innerHTML = "Current number: " + computer
    // get a value from the user; lower equal or higher
    let guess = document.getElementById('highlow').toLowerCase().value
    // update the next number but don't share yet
    let computernext = Math.ceil(Math.random()*10)
    console.log(computernext)
    
    // compare both values
    // if user is correct
    if ((guess == "lower") && (computernext < computer)) {
        // add a point to the score
        document.getElementById('scoreholder').innerHTML = "Score: " + (score+=1)
    }
    else if ((guess == "equal") && (computernext == computer)) {
        // add a point to the score
        document.getElementById('scoreholder').innerHTML = "Score: " + (score+=1)
    }
    else if ((guess == "higher") && (computernext > computer)) {
        // add a point to the score
        document.getElementById('scoreholder').innerHTML = "Score: " + (score+=1)
    }
    // else if user is wrong
    else {
        // end the game
        document.getElementById('scoreholder').innerHTML = "Score: " + score + "\n Wrong: Game Over"
        // ..game over
    }
}
// every time button is pressed, refresh??