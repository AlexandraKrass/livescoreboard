import React, { useState, useEffect, useRef } from "react";
import './LiveMatch.css';

interface MatchProps {
    id: number
    homeTeam: string
    awayTeam: string
    homeScore: number
    awayScore: number
    goalsHomeTeam?: number[]
    goalsAwayTeam?: number[]
    handleMatch(id: number): void 
}

const LiveMatch = ({ id, homeTeam, awayTeam, homeScore, awayScore, goalsHomeTeam, goalsAwayTeam, handleMatch }: MatchProps) => {
    const timeMatch = 90;
    const dataGoalsHome = new Set(goalsHomeTeam);
    const dataGoalsAway = new Set(goalsAwayTeam);

    const [seconds, setSeconds] = useState(0);
    const [homeScoreTeam, setScoreHomTeam] = useState(homeScore);
    const [awayScoreTeam, setScoreIntTeam] = useState(awayScore);

    const timer = useRef<NodeJS.Timeout | null>(null);


    useEffect(() => {
        if (seconds >= timeMatch){
            stopTimer();
            finishGame();
        } 

        if (dataGoalsHome.has(seconds)) {
            setScoreHomTeam((homeScoreTeam) => homeScoreTeam + 1);
        }
        if (dataGoalsAway.has(seconds)) {
            setScoreIntTeam((awayScoreTeam) => awayScoreTeam + 1);
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
            <p className="match-time">{`${seconds}:00`}</p>
        </div>

    )
}

export default LiveMatch;