import React, { useState } from "react";

//components
import LiveMatch from '../match/LiveMatch'
import SummaryList from '../match/SummaryMatches'

//constants
import { teams } from '../teams';

const MatchList = () => {

    const [teamsList, setTeamList] = useState([...teams]);

    const handleMatches = (id: number, homeScore: number, awayScore: number): void => {
        teamsList.map((item) => {
            if (item.idMatch === id) {
                item.isFinished = true;
                item.homeScore = homeScore;
                item.awayScore = awayScore;
            }
        })
        setTeamList([...teamsList]);
    }
    
    return (
        <div>
            <div>
                <div>
                    <SummaryList teams={teamsList}/>
                </div>
                
                <div>
                <h2 className="board-title">Live Score Board</h2>
                {teamsList.map(item => (
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