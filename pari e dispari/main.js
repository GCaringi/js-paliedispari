function randomGenerator1to5(){
    return Math.floor((Math.random()*5)+1);
}

function isEven(num){
    return (num % 2 === 0);
}

let choice;
let numChoice;
let numCPU = randomGenerator1to5()
let flag = true;

do{
    choice =prompt("Scegli se pari o dispari");
    choice = choice.toLowerCase();
    if (choice === "pari" || choice === "dispari"){
        flag = false;
    }
}while(flag);


do{
    numChoice = Number(prompt("Scegli un numero da 1 a 5"));
}while(isNaN(numChoice) || numChoice > 5 || numChoice < 0);


console.log("Player:", numChoice, "CPU:", numCPU, "player choice:", choice);

if (choice === "pari"){
    if (isEven(numChoice+numCPU)){
        console.log("Player win");
    }else{
        console.log("CPU win!!")
    }
}else{
    if (!isEven(numChoice+numCPU)){
        console.log("Player win");
    }else{
        console.log("CPU win!!")
    }
}
