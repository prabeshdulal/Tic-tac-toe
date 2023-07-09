import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXturn, setIsXurn] = useState(true);


  const handelReset = () => {
    setState(Array(9).fill(null));
    setIsXurn(true);
    
  };

  const isWinner = () => {
    const winningLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of winningLogic) {
      const [a, b, c] = logic;
      if (
        state[a] !== null &&
        state[a] === state[b] &&
        state[a] === state[c]
      ) {
        return state[a];
      }
    }
    return null;
  };

 

  const checkWinner = isWinner();

  const handelClick = (index) => {
    const copyState = [...state];
    copyState[index] = isXturn ? "X" : "O";
    setState(copyState);
    setIsXurn(!isXturn);
    
  };

  return (
    <>
      <div className="container">
        <h1>Tic-Tac-Toe</h1>
        <p>Player {isXturn ? "X" : "O"} please move</p>
        <div className="board">
          <div className="row">
            <Square onClick={() => handelClick(0)} value={state[0]} />
            <Square onClick={() => handelClick(1)} value={state[1]} />
            <Square onClick={() => handelClick(2)} value={state[2]} />
          </div>
          <div className="row1">
            <Square onClick={() => handelClick(3)} value={state[3]} />
            <Square onClick={() => handelClick(4)} value={state[4]} />
            <Square onClick={() => handelClick(5)} value={state[5]} />
          </div>
          <div className="row2">
            <Square onClick={() => handelClick(6)} value={state[6]} />
            <Square onClick={() => handelClick(7)} value={state[7]} />
            <Square onClick={() => handelClick(8)} value={state[8]} />
          </div>
        </div>
      </div>

      {checkWinner && (
        <div className="winner">
          <p>Congratulations! Player {checkWinner} is the winner 🥂</p>
        </div>
      )}

    

      <div className="restart">
        <button onClick={handelReset} className="button">
          Restart..
        </button>
      </div>
    </>
  );
};

export default Board;
