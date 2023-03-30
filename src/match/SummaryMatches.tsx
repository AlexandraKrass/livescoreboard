//constants
import { Team } from '../constants'

interface MatchListProps {
    matches: Team[];
}

const SummaryMatches = ({ matches }: MatchListProps) => {
    const filteredTeams = [...matches].filter((team) => team.isFinished);

    const sortedTeams = filteredTeams.sort((team1, team2) => {
        const team1TotalScore = team1.homeScore + team1.awayScore;
        const team2TotalScore = team2.homeScore + team2.awayScore;
        return team2TotalScore - team1TotalScore;
    });

    return (
        <div>
            {filteredTeams.length ? <h2>Summary of matches</h2> : null}
            {sortedTeams.map((item) =>
                <p key={item.idMatch} className="match-info">
                    {item.homeTeam} - {item.awayTeam}: {item.homeScore}–{item.awayScore}
                </p>
            )}
        </div>
    );
}

export default SummaryMatches;