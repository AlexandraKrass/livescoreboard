import { useContext } from 'react';

//components
import Board from './board/Board'
import MatchList from './matchList/MatchList';
import { Theme } from './types/types';
import { ThemeContext } from './components/theme/ThemeContext'

import './App.scss';

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
      <div className={'App ' + `${theme === Theme.Light ? "lightTheme" : "darkTheme"}`}>
        <button className='btn' onClick={() => setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light )}>
          switch theme
        </button>
        <Board>
          <MatchList />
        </Board>
      </div>
  );
}

export default App;
