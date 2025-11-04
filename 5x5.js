// we will ask the user what 5 x 5 is. They will have 5 tries to get it correct
let score = 0
// this jawn gotta be lowercase in function gotta be (grouped)
while (true) {
    // i want to ask the user what 5 x 5 is
    guess = prompt("What is 5 x 5: ")
    // if the answer is correct AND score is not equal to 5
    if ((guess == 25) && (score != 5)) {
        // we say correct
        window.alert("Correct")
        break
    }
    // else
    else {
        // add +1 to the score
        window.alert("Try Again")
        score += 1
    }

}