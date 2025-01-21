
const values = [];
const images = [];


function rollDice(){
    let numDice = document.getElementById('numofDice');
    let dicevalue = numDice.value;
    const diceresult = document.getElementById('result');
    const image1 = document.getElementById('result-images');

    for(let i = 0; i < dicevalue; i++){
        const value = Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="./images/${value}.jpg" alt>`)
    }

    diceresult.innerHTML = `Dice Rolled:<br> ${values.join(', ')}`;
    image1.innerHTML = images.join('');

    numDice.value = 0;
    
}

function reset(){
    const diceresult = document.getElementById('result');
    const image1 = document.getElementById('result-images');

    image1.innerHTML = '';
    diceresult.innerHTML = `Rolled again!`;
}
