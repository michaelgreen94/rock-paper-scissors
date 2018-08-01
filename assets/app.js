let options = [{
    name: "Rock",
    num: 0
}, {
    name: "Paper",
    num: 1
}, {
    name: "Scissors",
    num: 2
}]

for (let i = 0; i < options.length; i++) {
    let option = options[i];
    document.getElementById("game").innerHTML += `<button onclick="play(${i})">${option.name}</button>`
}

function play(num) {
    computersChoice = options[Math.floor(Math.random() * 2)];
    playerChoice = options[num];
    
}



//assign buttons a value from 0-2
//create a function that generates a whole min and max number in this range
//when i click a button run the random num funcion and assign its value to computers choice

