# Live Score Board

Here is a Live Football World Cup Score Board that shows matches and scores. We have the data of future matches. And we could see the result in our Board: `Live Board` and `Summary of matches`.
On the `Live Board`, you can start the match and see how the score changes throughout the game. At the end of the match, the result will be displayed in the `Summary of matches` that will show the results of the matches from highest to lowest.

##  How it works
We had the array with data of each match. Property 'goalsHomeTeam' means at what second the team scored a goal. When you push the button 'Start match' timer is launched. And you can see how score of teams are changed depending on the values in the array  'goalsHomeTeam' or 'goalsAwayTeam'. After the timer ends, the `Summary of matches` will appear in which the results of all completed matches will be displayed, and they will also be sorted depending on the amount of goals in one game.
I created this project with React(hooks) and Typescript. Minimum using CSS, but I will improve styles of my Score Board.


In the project directory, you can run:

### `npm start`
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.