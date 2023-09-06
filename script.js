const board = (function(){

    const cell=document.querySelectorAll('.cell')
    gameBoard = ["","","","","","","","",""];
    let current="x"
    const cong=document.querySelector('.cong')
    const h1=document.querySelector('.h1')
    const state=document.querySelector('.cong')
    const h11=document.querySelector('.h11')

mark = function(){
    for(let i=0; i<9; i++){
        cell[i].addEventListener("click",function(){
            if(!cell[i].innerHTML){
                cell[i].innerHTML=current
                gameBoard[i]=current
                current=(current==="x")?"o":"x"
                stateof()
                check()
                
    }});
}}

check = function(){
    for(let i=0;i<9;i++){
        if(gameBoard[0]=="x" && gameBoard[4]=="x" && gameBoard[8]=="x"){congratulate("Player X "); ;break;}
        if(gameBoard[2]=="x" && gameBoard[4]=="x" && gameBoard[6]=="x"){congratulate("Player X "); ;break}
        if(gameBoard[0]=="x" && gameBoard[3]=="x" && gameBoard[6]=="x"){congratulate("Player X "); ;break}
        if(gameBoard[1]=="x" && gameBoard[4]=="x" && gameBoard[7]=="x"){congratulate("Player X "); ;break}
        if(gameBoard[2]=="x" && gameBoard[5]=="x" && gameBoard[8]=="x"){congratulate("Player X "); ;break}
        if(gameBoard[0]=="x" && gameBoard[1]=="x" && gameBoard[2]=="x"){congratulate("Player X "); ;break}
        if(gameBoard[3]=="x" && gameBoard[4]=="x" && gameBoard[5]=="x"){congratulate("Player X "); ;break}
        if(gameBoard[6]=="x" && gameBoard[7]=="x" && gameBoard[8]=="x"){congratulate("Player X "); ;break}

        if(gameBoard[0]=="o" && gameBoard[4]=="o" && gameBoard[8]=="o"){congratulate("Player O "); ;break}
        if(gameBoard[2]=="o" && gameBoard[4]=="o" && gameBoard[6]=="o"){congratulate("Player O "); ;break}
        if(gameBoard[0]=="o" && gameBoard[3]=="o" && gameBoard[6]=="o"){congratulate("Player O "); ;break}
        if(gameBoard[1]=="o" && gameBoard[4]=="o" && gameBoard[7]=="o"){congratulate("Player O "); ;break}
        if(gameBoard[2]=="o" && gameBoard[5]=="o" && gameBoard[8]=="o"){congratulate("Player O "); ;break}
        if(gameBoard[0]=="o" && gameBoard[1]=="o" && gameBoard[2]=="o"){congratulate("Player O "); ;break}
        if(gameBoard[3]=="o" && gameBoard[4]=="o" && gameBoard[5]=="o"){congratulate("Player O "); ;break}
        if(gameBoard[6]=="o" && gameBoard[7]=="o" && gameBoard[8]=="o"){congratulate("Player O "); ;break}
    }
}
reset = function(){
    for(let i=0;i<9;i++){
        cell[i].innerHTML=""
        gameBoard[i]=""
        current="x"
        cong.style.display="none"
        h11.innerHTML="Player x's turn"
    }
}

res=document.querySelector('.reset').addEventListener("click", ()=>{
    reset()
})

   congratulate = function(name){
    
    h11.innerHTML=`${name}wins`
   }
   stateof = function(){
    
    h11.innerHTML=(current=="x")?"Player X's turn":"Player O's turn"
   } 


return{
    mark,
}


})()

board.mark()
