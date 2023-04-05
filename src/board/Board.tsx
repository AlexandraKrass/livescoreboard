//react
import React, { FC } from 'react';

//components
import MatchList from '../matchList/MatchList';
import './Board.scss';

interface BoardProps{
    children?: React.ReactNode
}

const Board: FC<BoardProps> = ({ children }) => {
    return (
        <div className="container">
            <h1>Football World Cup Score Board</h1>
            <div className="board-container">
                {children}
            </div>
        </div>
    )
}

export default Board;