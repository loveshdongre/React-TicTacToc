import React from 'react'

interface ControlsProps {
  newGameOnClick: () => void;
}

const Controls = (props: ControlsProps) => {
  return (
    <div className='controls'>
      <button onClick={() => props.newGameOnClick()}>New Game</button>
    </div>
  )
}

export default Controls
