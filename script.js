let userScore = 0;
let compScore = 0;
    const    compscore = document.querySelector("#compscore");
    const    userscore = document.querySelector("#userscore");
    

const choises = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

    const gencompchoice = () => {
        const options = ["rock", "paper","scissor"];
        const   randIdx  =  Math.floor(Math.random()*3);
        return options[randIdx];
    };

    const drawgame = () => {
        console.log("game was draw");
        msg.innerText = "game was draw ! play again";
        msg.style.backgroundColor = "yellow";
    }



    const palygame = (userchoice) => {
        
        // genrate computer choice
        const compchoice = gencompchoice();
       

        if(userchoice === compchoice){
            drawgame();
        }else{
            if(userchoice === "paper"){
                if(compchoice === "scissor"){
                    compwin();
                    msg.innerText = "loss! comp scissor beats yours paper ";
                }
                else{
                    userwin();
                    msg.innerText = "win! your paper cover comp's rock ";
                }
            }
            if(userchoice === "rock"){
                if(compchoice === "paper"){
                    compwin();
                    
                    
                }
                else{
                    userwin();
                    msg.innerText = "win! your paper cover comp's rock ";
                }
            }
            if(userchoice === "scissor"){
                if(compchoice === "rock"){
                    compwin();
                    msg.innerText = "loss! comp rock beats yours scissor ";
                }
                else{
                    userwin();
                }
            }
        }
        
    };

    choises.forEach((choice) => {
        choice.addEventListener("click", () => {
            const userchoice = choice.getAttribute("id");
            palygame(userchoice);
            
        });
    });

    const userwin = () =>{
        userScore++;
                    userscore.innerText = userScore;
                    console.log("you win the game:");
                    msg.innerText = "you win! ";
                    msg.style.backgroundColor = "green";

    }

    const compwin = () => {
        compScore++;
                    compscore.innerText = compScore;
                    console.log("you lost the game:");
                    msg.innerText = "you loss!";
                    msg.style.backgroundColor = "red";

    }