interface Team {
    idMatch: number;
    homeTeam: string;
    awayTeam: string;
    isFinished: boolean;
    homeScore: number;
    awayScore: number;
    goalsHomeTeam: number[];
    goalsAwayTeam: number[];
 }
 export type { Team }