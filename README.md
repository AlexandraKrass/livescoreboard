# Live Score Board

Here is a Live Football World Cup Score Board that shows matches and scores. We have the data of future matches. And we could see the result in our Board: `Live Board` and `Summary of matches`.
On the `Live Board`, you can start the match with the progress bar and the time of the match, the score changes throughout the game. If you want, you can interrupt the match and see the final result of the game. Completed matches are displayed in the `Summary of matches` which will show the results of the matches from the highest to the lowest.

##  How it works
We had an array with data for each match. The 'goalsHomeTeam' property means at what second the team scored a goal. But there is no reference to time, these seconds are formatted as percentages, which means at what point in the game the goal was scored. When you click the "Start Match" button, the timer starts. And you can see how the team score changes depending on "goalsHomeTeam" or "goalsAwayTeam" after the received calculations. You can force the game to end, and when the modal window appears, the match is paused. After the end of the match, a `Summary of matches` will appear, in which the results of all completed matches will be displayed, and they will also be sorted depending on the number of goals in one game.
I created this project with React(hooks) and Typescript. Minimum using CSS, but I have plan to improve styles of my mini-project :).


In the project directory, you can run:

### `npm start`
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.