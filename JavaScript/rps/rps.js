let humam = 0;
let machine = 0;

let rps  = ['Rock', 'Paper', 'Scissor'];

let choices = document.querySelectorAll(".choice");

let displayMessage = document.querySelector(".message");

let humanScore = document.querySelector("#human-score");
let machineScore = document.querySelector("#machine-score");

choices.forEach(choice => {
    choice.addEventListener("click", ()=> {
        let humanInput = choice.getAttribute("id");
        let machineIput = machineOutput();
        if(humanInput != machineIput){
            if(humanInput == 'Rock' && machineIput == 'Scissor' ||
                humanInput == 'Paper' && machineIput == 'Rock' ||
                humanInput == 'Scissor' && machineIput == 'Paper'
            ){
                humam ++;
                console.log(`Human Won:  Human ${humanInput} and Machine ${machineIput}`);
                displayMessage.innerText = `You Won: ${humanInput} beats ${machineIput}`;
            }
            else{
                console.log(`Machine Won:  Human ${humanInput} and Machine ${machineIput}`);
                machine++;
                displayMessage.innerText = `You Lost: ${machineIput} beats ${humanInput}`
            }
        }
        else{
            console.log(`Both Inputs are same: Human ${humanInput} and Machine ${machineIput}`);
            displayMessage.innerText = 'It is a Draw'
        }
        machineScore.innerText = machine;
        humanScore.innerText = humam;
    })
});


const machineOutput = () => {
    var x = Math.floor(Math.random() * 3);
    return rps[x];
}