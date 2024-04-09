let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelectorAll("#btn");
let newGamebtn = document.querySelector("#newbtn");
let msg = document.querySelectorAll("#msg");
let msgcontainer = document.querySelectorAll(".msg-container");
let turnO = true;
const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame = () => {
    turnO = true;
    enableboxes();
    msgcontainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
     if (turnO) {
box.innerText = "O";
box.style.color="red";
box.disabled=true;
turnO = false;
     } else {
        box.innerText = "X";
        turnO = true;
    }
    box.disabled = true;
     checkWinner();
    });
});
const Disableboxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};
const enableboxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};
const showWinner = (Winner) => {
    msg.forEach(element => {
        element.innerText = `Congratulations, the winner is ${Winner}`;

        element.parentElement.classList.remove("hide");
    });
    Disableboxes();
}
const checkWinner = () => {
for(let pattern of winpatterns){
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val ===  pos2Val  && pos2Val === pos3Val){
            showWinner(pos1Val);
    }
}
}
};
resetbtn.forEach(btn => {
    btn.addEventListener("click", resetGame);
});
const btn = () => {
    turnO = true;
    enableboxes();
    msgcontainer.forEach(container => {
        container.classList.add("hide");
    });
}
newGamebtn.addEventListener("click", ()=>{
    for(let box of boxes) {
        box.innerText = "";
    }
    msg.forEach(element => {
        element.parentElement.classList.add("hide");
    });
});




