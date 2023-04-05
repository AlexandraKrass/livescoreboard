//react
import { useState, useEffect, useRef, useCallback } from "react";

//constants
import { TIME_MATCH } from '../matches'
import { MatchType } from '../constants'

import './LiveMatch.scss';

interface MatchProps {
    match: MatchType
    handleMatch(id: number, homeScoreTeam: number, awayScoreTeam: number): void
}

const LiveMatch = ({ match, handleMatch }: MatchProps) => {
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
        if (seconds >= TIME_MATCH) finishGame();

        if (dataGoalsHome.has(seconds)) setScoreHomTeam(incrementHomeScore);
        if (dataGoalsAway.has(seconds)) setScoreAwayTeam(incrementAwayScore);

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
        stopTimer();
        handleMatch(idMatch, homeScoreTeam, awayScoreTeam)
    };

    return (
        <div className="match-item">
            <div className="match-info">
                {homeTeam} - {awayTeam}:
                <button className="btn-add-goal" onClick={() => setScoreHomTeam(incrementHomeScore)}> + </button>
                {homeScoreTeam}
                –
                {awayScoreTeam}
                <button className="btn-add-goal" onClick={() => setScoreAwayTeam(incrementAwayScore)}> + </button>
            </div>
            {seconds >= 3 ? 
            <button className="match-btn btn-finished" onClick={() => finishGame()}>Finish Game</button>
                : <button className="match-btn btn-started" onClick={startTimer}>Start game</button>
            }
            <p className="match-time">{`${seconds}:00`}</p>
        </div>

    )
}

export default LiveMatch;