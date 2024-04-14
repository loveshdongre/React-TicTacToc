interface TileProps {
    placeholder: string,
    onClick: (i: number, j: number) => void,
    i: number,
    j: number,
    boardValues: string[][]
}

const Tile = (props: TileProps) => {
  return (
    <div className='single-tile' onClick={() => props.onClick(props.i, props.j)}>
        <span className='placeholder'>{props.placeholder}</span>
        <span className='xoValue'>{props.boardValues[props.i][props.j]}</span>
    </div>
  )
}

export default Tile
