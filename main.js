console.log("dice js");

// create dieRolls array
let dieRolls = []

// DOM Things
const rollButton = document.querySelector("#roll-dice-button");
const numDiceInput = document.querySelector("#num-dice");
const sumDisplayDiv = document.querySelector("#sum-display");

const showAllRollsButton = document.querySelector("#show-all-rolls-button");
const showAllRollsDisplayOl = document.querySelector("#show-all-rolls-display");

rollButton.addEventListener("click", function() {
    console.log('"Roll!" button clicked');
    // for readability
    let numDice = Number(numDiceInput.value);
    console.log(numDice);
    let rollCount = 0;
    while (rollCount < numDice){
        dieRolls.push( Math.ceil( Math.random() * 6 ) )
        // don't forget to incriment
        rollCount = rollCount + 1;
    }
    console.log(dieRolls);

    // Sum things up
    rollCount = 0;
    let rollSum = 0;
    while (rollCount < dieRolls.length){
        rollSum = rollSum + dieRolls[rollCount];
        rollCount = rollCount + 1;
    }
    console.log(rollSum);

    // display to user
    sumDisplayDiv.innerHTML = "The sum or rolls is " + rollSum;
});

showAllRollsButton.addEventListener("click", function() {
    let rollCount = 0;
    while (rollCount < dieRolls.length) {
        const newDiceString = '<li class="dice">' + dieRolls[rollCount] + '</li>'
        showAllRollsDisplayOl.innerHTML += newDiceString
        rollCount = rollCount + 1;
    }
});