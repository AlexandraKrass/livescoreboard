//react
import { useState, useEffect, useRef, useCallback } from "react";

//constants
import { TIME_MATCH } from '../matches'
import { MatchList } from '../constants'

import './LiveMatch.css';

interface MatchProps {
    match: MatchList
    handleMatch(id: number, homeScoreTeam: number, awayScoreTeam: number): void 
}

const LiveMatch = ({ match, handleMatch}: MatchProps) => {
    const { idMatch, homeTeam, awayTeam, homeScore, awayScore, goalsHomeTeam, goalsAwayTeam, isFinished } = match;

    const dataGoalsHome = new Set(goalsHomeTeam);
    const dataGoalsAway = new Set(goalsAwayTeam);

    const [seconds, setSeconds] = useState(0);
    const [homeScoreTeam, setScoreHomTeam] = useState(homeScore);
    const [awayScoreTeam, setScoreAwayTeam] = useState(awayScore);

    const timer = useRef<NodeJS.Timeout | null>(null);

    const incrementHomeScore = useCallback(
        (homeScoreTeam: number) => homeScoreTeam + 1, []
    );

    const incrementAwayScore = useCallback(
        (awayScoreTeam: number) => awayScoreTeam + 1, []
    );

    useEffect(() => {
        if (seconds >= TIME_MATCH) {
            stopTimer();
            finishGame();
        }

        if (dataGoalsHome.has(seconds)) {
            setScoreHomTeam(incrementHomeScore);
        }
        if (dataGoalsAway.has(seconds)) {
            setScoreAwayTeam(incrementAwayScore);
        }
    }, [seconds]);

    const startTimer = () => {
        if (!timer.current) {
            timer.current = setInterval(() => {
                setSeconds((seconds) => seconds + 1);
            }, 1000);
        }
    };

    const stopTimer = () => {
        if (timer.current) clearInterval(timer.current);
        timer.current = null;
        setSeconds(0);
    };

    const finishGame = () => {
        handleMatch(idMatch, homeScoreTeam, awayScoreTeam)
    };

    return (
        <div className="match-item">
            <p className="match-info">{homeTeam} - {awayTeam}: {homeScoreTeam}–{awayScoreTeam}</p>
            {isFinished ?
                <p className="match-finished">Finished</p>
                :
                <button className="match-btn-started" onClick={startTimer}>Start game</button>
            }
            {!isFinished && <p className="match-time">{`${seconds}:00`}</p>}
        </div>

    )
}

export default LiveMatch;