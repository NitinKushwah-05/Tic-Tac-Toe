let btn=document.querySelectorAll(".btn");
let resetbtn=document.querySelector("#btn");
let msg=document.querySelector(".msg");
let msgContainer=document.querySelector(".msg-container");
let newbtn=document.querySelector("#newBtn");
let turnO= true;
let count=0;

const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const resetGame=()=>{
    turnO=true;
    count=0;
    enableBtns();
    msgContainer.classList.add("hide");
}
const disableBtns=()=>{
    for(let button of btn){
        button.disabled=true;
    }
}

const enableBtns=()=>{
    for(let button of btn){
        button.disabled=false;
        button.innerText="";
    }
}

for(let button of btn){
    button.addEventListener("click", ()=>{
        
        if(turnO===true){
            button.innerText="O";
            turnO=false;
        }
        else{
            button.innerText="X";
            turnO=true;
        }
        button.disabled=true;
        count++;
        
        let isWinner=checkWinner();

        if(count===9 && !isWinner){
            gameDraw();
        }
    })
}

const gameDraw=()=>{
    msg.innerText="match is draw";
    msgContainer.classList.remove("hide");
    disableBtns();
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations, The Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBtns();
}

const checkWinner=()=>{
    for (let pattern of winPattern){
            let pos1Val=btn[pattern[0]].innerText;
            let pos2Val=btn[pattern[1]].innerText;
            let pos3Val=btn[pattern[2]].innerText;

            if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                showWinner(pos1Val);
                return true;
            } 
            
        }
    }
}
resetbtn.addEventListener("click",resetGame);
newbtn.addEventListener("click",resetGame);
