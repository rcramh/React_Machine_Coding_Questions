import { useState } from "react";
import "./App.css"

const App = () => {
  const [board,setBoard] = useState(new Array(9).fill(""));
  const [winner , setWinner] = useState(null)
  const [currPlayer, setCurrPlayer] = useState('X')

  const checkWinner = (board) => {
    const winArr = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ]

    //check board for winner array
    for(let i=0;i<winArr.length;i++){
      const [a,b,c] = winArr[i];
      if(board[a] && board[a] === board[b] && board[b]===board[c] ){
        return true;
      }
    }
    return false;
  }

  const handleBoxClick = (i) => {
    //update board
    const newBoard  = [...board];
    newBoard[i] = currPlayer;
    setBoard(newBoard);

    //check for winner
    if(checkWinner(newBoard)){
      setWinner(currPlayer);
      console.log("winner is " + currPlayer)
    }

    //update curr player
    const newTurn = (currPlayer === 'X' ? '0' : 'X')
    setCurrPlayer(newTurn);

  }

  return (
    <div>
      {
        !winner && 
        <div>
          Current Player is : {currPlayer}
        </div>
      }
      {
        winner && 
        <div>
          Game over , winner is : {winner}
        </div>
      }
      

      <div className="t_board">
        {board && board.map((box_item,i)=>(
            <button key={i} className="board_box" 
            disabled={box_item || winner}
            onClick={()=>handleBoxClick(i)}
            >
                {box_item}
            </button>
        ))}
      </div>
      

    </div>
  )
}

export default App;