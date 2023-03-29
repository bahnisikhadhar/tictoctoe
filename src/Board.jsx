import React,{useState} from "react";
import Square from "./Square";

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [winner, setWinner] = useState(null);
  
    const handleClick = (i) => {
      const newSquares = [...squares];
      if (winner || newSquares[i]) {
        return;
      }
      newSquares[i] = xIsNext ? 'X' : 'O';
      setSquares(newSquares);
      setXIsNext(!xIsNext);
      setWinner(calculateWinner(newSquares));
    };
  
    const calculateWinner = (squares) => {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
    };
  
    const renderSquare = (i) => {
      return <Square value={squares[i]} onClick={() => handleClick(i)} />;
    }
  
    const restartGame = () => {
      setSquares(Array(9).fill(null));
      setXIsNext(true);
      setWinner(null);
    }
  
    let status;
    if (winner) {
      status = `Winner: ${winner}`;
      alert(`winner is ${winner}`)
    } else if (squares.every(Boolean)) {
      status = 'Draw';
    } else {
      status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }
  
    return (
      <div>
        <h1>{status}</h1>
        <p>The winner is {winner}</p>
        <button onClick={restartGame}>Restart</button>
        <table>
          <tbody>
            <tr>
              <td>{renderSquare(0)}</td>
              <td>{renderSquare(1)}</td>
              <td>{renderSquare(2)}</td>
            </tr>
            <tr>
              <td>{renderSquare(3)}</td>
              <td>{renderSquare(4)}</td>
              <td>{renderSquare(5)}</td>
            </tr>
            <tr>
              <td>{renderSquare(6)}</td>
              <td>{renderSquare(7)}</td>
              <td>{renderSquare(8)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
  
  export default Board;