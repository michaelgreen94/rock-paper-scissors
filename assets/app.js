let options = ["Rock","Paper","Scissors"]

for (let i = 0; i < options.length; i++) {
    let option = options[i];
    document.getElementById("game").innerHTML += `<button onclick="play(${i})">${option}</button>`
}

function play(num) {
    let randomIndex = Math.floor(Math.random() * options.length)
    let computersChoice = options[randomIndex];
    let playerChoice = options[num];
    let x = "Tie";
    let y = "Winner";
    let z = "Loser";
    document.getElementById("comp-choice").innerHTML = computersChoice;
    document.getElementById("user-choice").innerHTML = playerChoice;
    if (playerChoice == computersChoice) {
        document.getElementById("results").innerHTML = x; 
    } else if (playerChoice == "Rock" && computersChoice == "Paper") {
        document.getElementById("results").innerHTML = z;
    } else if (playerChoice == "Paper" && computersChoice == "Scissors") {
        document.getElementById("results").innerHTML = z;
    } else if (playerChoice == "Scissors" && computersChoice == "Rock") {
        document.getElementById("results").innerHTML = z;
    } else {
        document.getElementById("results").innerHTML = y;
    }
    
}



//assign buttons a value from 1-3
//create a function that generates a whole min and max number in this range
//when i click a button run the random num funcion and assign its value to computers choice

