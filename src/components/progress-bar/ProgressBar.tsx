import React, { FC } from 'react'

interface IProgressBar {
    currentTime: number;
    finalTime: number;
}

const ProgressBar: FC<IProgressBar> = ({ currentTime, finalTime }) => {
    const currentProgress = (currentTime * 100) / finalTime;

    const containerStyles: React.CSSProperties = {
      height: '12px',
      width: '100%',
      backgroundColor: "#4247e519",
      borderRadius: '50px',
      margin: '0 0 10px'
    }
  
    const fillerStyles: React.CSSProperties = {
      height: '100%',
      width: `${currentProgress}%`,
      transition: 'width 1s ease-in-out',
      backgroundColor: '#4247E5',
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}></div>
      </div>
    );
}

export default ProgressBar;