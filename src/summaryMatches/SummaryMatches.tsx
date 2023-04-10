//constants
import { IMatch } from '../types/types'

interface MatchListProps {
    matches: IMatch[];
}

const SummaryMatches: React.FC<MatchListProps> = ({ matches }) => {
    const filteredTeams = [...matches].filter((team) => team.isFinished);

    const sortedTeams = filteredTeams.sort((team1, team2) => {
        const team1TotalScore = (team1.homeScore ?? 0) + (team1.awayScore ?? 0);
        const team2TotalScore = (team2.homeScore ?? 0) + (team2.awayScore ?? 0);
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