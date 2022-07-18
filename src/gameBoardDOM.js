export default function gameBoardDOM(player){
    const container = document.getElementById('container');
    const gameBoard = document.createElement('div');
    gameBoard.classList.add(player)
    gameBoard.classList.add('gameboard')
    container.appendChild(gameBoard);
    for (let i = 0; i < 10; i++){
        for (let j = 0; j < 10; j++){
            const div = document.createElement('div');
            div.classList.add("board-space");
            div.classList.add("x"+i);
            div.classList.add("y"+j);
            div.classList.add(player);
            gameBoard.appendChild(div);
        }
    }
};