//react
import { FC, ReactNode, useContext } from 'react';

//components
import './Board.scss';
import { ThemeContext  } from '../components/theme/ThemeContext';
import { Theme } from '../types/types';

interface BoardProps{
    children?: ReactNode
}

const Board: FC<BoardProps> = ({ children }) => {
    const { theme, setTheme } = useContext(ThemeContext);
    console.log(theme)

    return (
        <div className="container">
            <h1 className={'board-title ' + `${theme === Theme.Dark ? 'dark-title' : 'light-title'}`}>
                Football World Cup Score Board
            </h1>
            <div className={"board-container " + `${theme === Theme.Dark ?  'light-background' : 'dark-background'}`}>
                {children}
            </div>
        </div>
    )
}

export default Board;