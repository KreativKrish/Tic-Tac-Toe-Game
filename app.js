let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // playerX, playerO
let count =0; // count the no. of times a button is clicked
let winner ="";

// 2D Arrays
const win_pattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame =() => {
    turnO =true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if (turnO){ //player0
            box.innerText = "O";
            turnO = false;
        } else { 
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
        checkDraw();
    })
})

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide"); 
};

const checkWinner = () => {
    for (pattern of win_pattern){

        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if (val1 != "" && val2 != "" && val3 != ""){
            if (val1 === val2  && val2 === val3){
                console.log(`${val1} is the winner`);
                disableBoxes();
                showWinner(val1); 
                winner = val1;
            }
        }
    }
};

const checkDraw = () => {
    if(count === 9 && winner === ""){
        msg.innerText = "This Game is a Draw";
        msgContainer.classList.remove("hide"); 
    }
};
resetBtn.addEventListener("click" ,resetGame);
newBtn.addEventListener("click" ,resetGame);
