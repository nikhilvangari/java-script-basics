let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let winnerDisplay = document.querySelector("h2");

let firstPlayer = true;

let winner = 0;

const winningPatterns = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8]
];

reset.addEventListener("click", () => {
    for(box of boxes){
        box.innerText = '';
    }
    winner = 0;
    firstPlayer = true;
});

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(box.innerText == ''){
            if(firstPlayer){
                box.innerText = 'X';
            }
            else{
                box.innerText = 'O';
            }
            firstPlayer = !firstPlayer;
        }
        else{
            console.error("box is already selected, try again");
        }
        winner = checkForWinner()
        if(winner > 0){
            winnerDisplay.innerText = `Congrats!! Player ${winner} has won`;
        }
    });
})


checkForWinner = () => {
    for(pattern of winningPatterns){
        console.log(`${pattern[0]}, ${pattern[1]}, ${pattern[2]}`);
        
        if(boxes[pattern[0]].innerText == 'X' && 
            boxes[pattern[1]].innerText == 'X' && 
            boxes[pattern[2]].innerText == 'X'){
            return 1;
        }

        if(boxes[pattern[0]].innerText == 'O' && 
            boxes[pattern[1]].innerText == 'O' && 
            boxes[pattern[2]].innerText == 'O'){
            return 2;
        }
    }
    return 0;
}