//react
import { FC, useState, useEffect, useRef, useCallback } from "react";

//constants
import { TIME_MATCH } from '../matches'
import { IMatch } from '../types/types'

//components
import ProgressBar from '../progress-bar/ProgressBar'

import './LiveMatch.scss';

interface MatchProps {
    match: IMatch
    handleMatch(id: number, homeScoreTeam: number, awayScoreTeam: number): void
}

const LiveMatch: FC<MatchProps> = ({ match, handleMatch }) => {
    const { idMatch, homeTeam, awayTeam, goalsHomeTeam, goalsAwayTeam } = match;

    const dataGoalsHome = new Set(goalsHomeTeam);
    const dataGoalsAway = new Set(goalsAwayTeam);

    const [seconds, setSeconds] = useState<number>(0);
    const [homeScoreTeam, setScoreHomTeam] = useState<number>(0);
    const [awayScoreTeam, setScoreAwayTeam] = useState<number>(0);

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
                {seconds >= 3 ?
                    <button className="match-btn btn-finished" onClick={() => finishGame()}>Finish Game</button>
                    : <button className="match-btn btn-started" onClick={startTimer}>Start game</button>
                }
            </div>

            {seconds >= 1 && (
                <div className="match-progress">
                    <p className="match-time">
                        {`Match time: ${seconds}:00 (${seconds > (TIME_MATCH / 2) ? '2nd half' : '1st half'})`}
                    </p>
                    <ProgressBar currentTime={seconds} finalTime={TIME_MATCH} />
                </div>
            )
            }

        </div>

    )
}

export default LiveMatch;