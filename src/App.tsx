import React, { useState } from 'react';
import './App.css';
import Board from './Components/Board';
import Title from './Components/Title';
import Controls from './Components/Controls';
import MessageBox from './Components/MessageBox';

function App() {
  
  const [currentTurn, setCurrentTurn] = useState('X'); // State to hold the current turn, starting with 'X'
  const newBoard = [['', '', ''],['', '', ''],['', '', '']];
  const [boardValues, updateBoardValues] = useState(newBoard);
  const [enabled, updateEnabled] = useState(false);
  const [msg, updateMsg] = useState("");

  const handleTileClick = (i: number, j: number) => {
    // Toggle the current turn between 'X' and 'O'
    if(!checkGameEnd() && boardValues[i][j] === '') {
        boardValues[i][j] = currentTurn;
        setCurrentTurn(currentTurn === 'X' ? 'O' : 'X');
        updateBoardValues(boardValues)
        checkGameEnd()
    }
  };

  const checkGameEnd = () : boolean => {

    // check winner
    const winner = checkWinner();
    if(winner != null) {
      updateMsg(`${winner} is the Winner`);
      updateEnabled(true);
      return true;
    }
    return false;
  }

  function checkWinner(): string | null {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (boardValues[i][0] === boardValues[i][1] && boardValues[i][1] === boardValues[i][2] && boardValues[i][0] !== '') {
        return boardValues[i][0];
      }
    }
  
    // Check columns
    for (let j = 0; j < 3; j++) {
      if (boardValues[0][j] === boardValues[1][j] && boardValues[1][j] === boardValues[2][j] && boardValues[0][j] !== '') {
        return boardValues[0][j];
      }
    }
  
    // Check diagonals
    if ((boardValues[0][0] === boardValues[1][1] && boardValues[1][1] === boardValues[2][2] && boardValues[0][0] !== '') ||
        (boardValues[0][2] === boardValues[1][1] && boardValues[1][1] === boardValues[2][0] && boardValues[0][2] !== '')) {
      return boardValues[1][1];
    }
  
    // No winner
    return null;
  }

  const handleNewGame = () => {
    updateBoardValues(newBoard);
    setCurrentTurn('X');
    updateMsg('');
    updateEnabled(false);
  }

  return (
    <div className="App">
      <Title/>
      <Board boardValues={boardValues} handleTileClick={handleTileClick}/>
      <MessageBox msg={msg} enabled={enabled}/>
      <Controls newGameOnClick={() =>  handleNewGame()}/>
    </div>
  );
}

export default App;
