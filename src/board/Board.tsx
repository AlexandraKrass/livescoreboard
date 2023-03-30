//react
import React, { useState } from 'react';

//components
import MatchList from '../matchList/MatchList';
import './Board.css';

const Board = () => {

    return (
        <div className="container">
            <div className="board-container">
                <MatchList />
            </div>
        </div>
    )
}

export default Board;