import Tile from './Tile';

interface BoardProps {
    boardValues: string[][],
    handleTileClick: (i: number, j: number) => void
    
}

const Board = (props: BoardProps) => {

    return (
        <div className='board'>
            <Tile boardValues={props.boardValues} i={0} j={0} placeholder='T' onClick={props.handleTileClick}></Tile>
            <Tile boardValues={props.boardValues} i={0} j={1} placeholder='I' onClick={props.handleTileClick}></Tile>
            <Tile boardValues={props.boardValues} i={0} j={2} placeholder='C' onClick={props.handleTileClick}></Tile>
            <Tile boardValues={props.boardValues} i={1} j={0} placeholder='T' onClick={props.handleTileClick}></Tile>
            <Tile boardValues={props.boardValues} i={1} j={1} placeholder='A' onClick={props.handleTileClick}></Tile>
            <Tile boardValues={props.boardValues} i={1} j={2} placeholder='C' onClick={props.handleTileClick}></Tile>
            <Tile boardValues={props.boardValues} i={2} j={0} placeholder='T' onClick={props.handleTileClick}></Tile>
            <Tile boardValues={props.boardValues} i={2} j={1} placeholder='O' onClick={props.handleTileClick}></Tile>
            <Tile boardValues={props.boardValues} i={2} j={2} placeholder='E' onClick={props.handleTileClick}></Tile>
        </div>
    )
}

export default Board;
