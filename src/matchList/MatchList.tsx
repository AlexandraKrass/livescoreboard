import React, { useState } from "react";

//components
import LiveMatch from '../match/LiveMatch'
import SummaryList from '../match/SummaryMatches'

//constants
import { matches } from '../matches';

const MatchList = () => {

    const [matchesList, setTeamList] = useState([...matches]);

    const handleMatches = (id: number, homeScore: number, awayScore: number): void => {
        matchesList.map((item) => {
            if (item.idMatch === id) {
                item.isFinished = true;
                item.homeScore = homeScore;
                item.awayScore = awayScore;
            }
        })
        setTeamList([...matchesList]);
    }
    
    return (
        <div>
            <div>
                <div>
                    <SummaryList matches={matchesList}/>
                </div>
                
                <div>
                <h2 className="board-title">Live Score Board</h2>
                {matchesList.map(item => (
                    <LiveMatch
                        id={item.idMatch}
                        key={item.idMatch}
                        homeTeam={item.homeTeam}
                        awayTeam={item.awayTeam}
                        homeScore={item.homeScore}
                        awayScore={item.awayScore}
                        goalsHomeTeam={item.goalsHomeTeam}
                        goalsAwayTeam={item.goalsAwayTeam}
                        isFinished={item.isFinished}
                        handleMatch={handleMatches}
                    />
                ))}
                </div>
            </div>
        </div>
    )
}

export default MatchList;