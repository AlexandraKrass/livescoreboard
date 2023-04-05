//components
import MatchList from '../matchList/MatchList';
import './Board.scss';

const Board = () => {

    return (
        <div className="container">
            <h1>Football World Cup Score Board</h1>
            <div className="board-container">
                <MatchList />
            </div>
        </div>
    )
}

export default Board;