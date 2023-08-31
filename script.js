const board = (function(){
    const cell=document.querySelectorAll('.cell')
gameBoard = ["x","o","x","o","x","o","x","o","x"];

render= function(){


for(let i=0; i<9; i++){
 cell[i].innerHTML=gameBoard[i]
}
}

return{
    render
}


})()
board.render()





const players =()=>{

 const player1 = {

    }
 const player2 = {

    }
return{
    player1,player2
}
}
