//react
import React, { useState } from 'react';

//constants
import { teams } from '../teams'

//components
import LiveMatch from '../match/LiveMatch'
import './Board.css';

const Board = () => {
    const [teamsList, setTeamList] = useState([...teams]);
    
    const handleMatches = (id: number):void => {
        teamsList.map((item) => {
            if(item.idMatch === id) item.isFinished = true;
        })
        setTeamList([...teamsList]);
    }

    return (
        <div className="container">
            <div className="board-container">
                <h2 className="board-title">Live Score Board</h2>
                <div>
                    {teamsList.map(item => (
                        !item.isFinished ? (
                            <LiveMatch
                                id={item.idMatch}
                                key={item.idMatch}
                                homeTeam={item.homeTeam}
                                awayTeam={item.awayTeam}
                                homeScore={item.homeScore}
                                awayScore={item.awayScore}
                                goalsHomeTeam={item.goalsHomeTeam}
                                goalsAwayTeam={item.goalsAwayTeam}
                                handleMatch={handleMatches}
                            />
                        ): 
                        <div> {item.homeTeam} - {item.awayTeam}: {item.homeScore}–{item.awayScore}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Board;