import { useState, useCallback, useRef } from "react";

//components
import LiveMatch from '../match/LiveMatch'
import SummaryList from '../match/SummaryMatches'

//constants
import { matches } from '../matches';
import { MatchType } from '../constants'
import './MatchList.scss'

const MatchList = () => {
    const homeTeam = useRef<HTMLInputElement>(null);
    const awayTeam = useRef<HTMLInputElement>(null);

    const [matchesList, setMatchList] = useState<MatchType[]>([...matches]);
    const [addMatch, addNewMatch] = useState(false);

    const handleMatches = (id: number, homeScore: number, awayScore: number) => {
        matchesList.map((item) => {
            if (item.idMatch === id) {
                item.isFinished = true;
                item.homeScore = homeScore;
                item.awayScore = awayScore;
            }

        })
        setMatchList([...matchesList]);
    }

    const updateMatchesList = () => {
        let newMatch = {
            idMatch: 106,
            homeTeam: homeTeam.current?.value || '',
            awayTeam: awayTeam.current?.value || '',
            isFinished: false,
            homeScore: 0,
            awayScore: 0
        }

        setMatchList([...matchesList, newMatch]);
        addNewMatch(!addMatch)
    }

    return (
        <div>
            <div>
                <SummaryList matches={matchesList} />
            </div>

            <div>
                <h2 className="board-title">Live Score Board</h2>
                {matchesList.map(match => (
                    !match.isFinished &&
                    <LiveMatch
                        key={match.idMatch}
                        match={match}
                        handleMatch={handleMatches}
                    />
                ))}
                {addMatch &&
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
                {addMatch ? 
                    <button className="btn" onClick={updateMatchesList}> Save match </button>
                    :
                    <button className="btn" onClick={() => addNewMatch(!addMatch)}> Add one more match </button>
                }

            </div>
        </div>
    )
}

export default MatchList;