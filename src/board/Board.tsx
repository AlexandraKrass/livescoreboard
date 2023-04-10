//react
import { FC, ReactNode } from 'react';

//components
import './Board.scss';

interface BoardProps{
    children?: ReactNode
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