import React, { useState } from "react";

export default ({ text }) => {
  const [board, setBoard] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]);
  const [player, setPlayer] = useState(false);

  const AnyBodyWon = () => {
    for (let i = 0; i < board.length; i++) {}
  };

  const move = (e, x, y) => {
    e.preventDefault();
    let playerTurn;
    switch (player) {
      case false:
        playerTurn = "x";
        break;
      case true:
        playerTurn = "y";
        break;
      default:
        playerTurn = "x";
    }

    // alert(`player ${playerTurn} clicked ${x} , ${y}`)
    let newBoard = board;
    newBoard[x][y] = playerTurn;
    setBoard((board) => newBoard);
    setPlayer((player) => !player);

    AnyBodyWon();
  };
  return (
    <div>
      Home Component {text}
      <div>
        game to be played
        {board.map((arr, x) => {
          return (
            <div>
              {arr.map((element, y) => {
                return (
                  <button onClick={(e) => move(e, x, y)}>{element}</button>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
