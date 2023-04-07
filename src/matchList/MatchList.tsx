import { useState, useRef } from "react";

//components
import LiveMatch from '../match/LiveMatch'
import SummaryList from '../match/SummaryMatches'

//constants
import { matches } from '../matches';
import { IMatch } from '../types/types'
import './MatchList.scss'

const MatchList = () => {
    const homeTeam = useRef<HTMLInputElement>(null);
    const awayTeam = useRef<HTMLInputElement>(null);

    const [matchesList, setMatchList] = useState<IMatch[]>([...matches]);
    const [finishedMatches, setFinishedMatches] = useState<IMatch[]>([]);
    const [newMatch, setNewMatch] = useState<boolean>(false);

    const handleMatches = (id: number, homeScore: number, awayScore: number) => {
        const updatedMatchesList = matchesList.filter((match) => {
            if (match.idMatch === id) {
              return (
                match.homeScore = homeScore,
                match.awayScore = awayScore,
                match.isFinished = true
              );
            }
          });
        setFinishedMatches([...finishedMatches, ...updatedMatchesList]);
    }

    const updateMatchesList = () => {
        let newMatch = {
            idMatch: Date.now(),
            homeTeam: homeTeam.current?.value || '',
            awayTeam: awayTeam.current?.value || '',
            isFinished: false,
            homeScore: 0,
            awayScore: 0
        }

        setMatchList([...matchesList, newMatch]);
        setNewMatch(!newMatch)
    }

    return (
        <div>
            {!!finishedMatches.length && <SummaryList matches={finishedMatches} />}
            <div>
                <h2 className="board-title">Live Score Board</h2>
                {matchesList.map(match => (
                    !match?.isFinished &&
                    <LiveMatch
                        key={match.idMatch}
                        match={match}
                        handleMatch={handleMatches}
                    />
                ))}
                {newMatch &&
                    <div>
                        <label className="label-text">
                            Home Team:
                            <input type="text" ref={homeTeam}  />
                        </label>
                        <label className="label-text">
                            Away Team:
                            <input type="text" ref={awayTeam} />
                        </label>
                    </div>
                }
                {newMatch ? 
                    <button className="btn" onClick={updateMatchesList}> Save match </button>
                    :
                    <button className="btn" onClick={() => setNewMatch(!newMatch)}> Add one more match </button>
                }

            </div>
        </div>
    )
}

export default MatchList;