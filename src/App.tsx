import React from 'react';
import './App.css';
import Board  from './board/Board'
import MatchList from './matchList/MatchList';

function App() {
  return (
    <div className="App App-header">
      <Board>
          <MatchList />
        </Board>
    </div>
  );
}

export default App;
