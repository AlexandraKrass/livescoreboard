import React, { useState, useEffect, useRef } from "react";
import './LiveMatch.css';

interface MatchProps {
    id: number
    homeTeam: string
    awayTeam: string
    homeScore: number
    awayScore: number
    goalSeconds: number[]
    handleMatch(id: number): void 
}

const LiveMatch = ({ id, homeTeam, awayTeam, homeScore, awayScore, goalSeconds, handleMatch }: MatchProps) => {
    const timeMatch = 90;
    const copyGoalSeconds = new Set(goalSeconds);

    const [seconds, setSeconds] = useState(0);
    const [homeScoreTeam, setScoreHomTeam] = useState(homeScore);
    const [awayScoreTeam, setScoreIntTeam] = useState(awayScore);

    const timer = useRef<NodeJS.Timeout | null>(null);


    useEffect(() => {
        if (seconds >= timeMatch){
            stopTimer();
            finishGame();
        } 

        if (copyGoalSeconds.has(seconds)) {
            setScoreHomTeam((homeScoreTeam) => homeScoreTeam + 1);
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
        handleMatch(id)
    };

    return (
        <div className="match-item">
            <p className="match-info">{homeTeam} - {awayTeam}: {homeScoreTeam}–{awayScoreTeam}</p>
            <button className="match-started" onClick={startTimer}>Start game</button>
            {`${seconds}:00`}
        </div>

    )
}

export default LiveMatch;