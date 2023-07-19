import React from 'react';
import './styles/Chessboard.scss';
import ChessField from './chessField';

const chessboard: number[] = [];
console.log(typeof chessboard);
const createChessboard = () => {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if ((i + j) % 2 === 0) {
                chessboard.push(0);
            } else {
                chessboard.push(1);
            }
        }
    }
};
createChessboard();
export default function Chessboard() {
    console.log(chessboard);
    return (
        <div className='Chessboard'>
            {chessboard.map((item, i) =>
                chessboard[i] === 0 ? (
                    <ChessField color={'white'} key={i}></ChessField>
                ) : (
                    <ChessField color={'black'} key={i}></ChessField>
                )
            )}
        </div>
    );
}
