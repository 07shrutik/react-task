import React, { useState } from "react";

import { Board } from "./components/Board";
import { Reset} from "./components/Reset";

import './App.css';


const App = () => {

  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const [xPlaying, setXPlaying] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(null))
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 })
  const [gameOver, setGameOver] = useState(false);
  const [win, setwin] = useState("");

  const handleBoxClick = (boxIdx) => {
    
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying ? "X" : "O";
      } else {
        return value;
      }
    })

    setBoard(updatedBoard);

    const winner = checkWinner(updatedBoard);

    if (winner) {
      setwin(winner==="O" ? " O is winner" :"x is winner")
      if (winner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore })
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore })
      }
    }

    
    setXPlaying(!xPlaying);
  }

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true);
        // if(board[x]==="x"){
        //   setwin("player 1 wins -X")
        // }else{
        //   setwin("player 2 wins -O")
        // }
        return board[x];
      }
    }
  }

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
    setwin("")
  }

  return (
    <div className="App">
      
      <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} />
      <h1>{win}</h1>
      <Reset resetBoard={resetBoard} />

    </div>
  );
}

export default App;