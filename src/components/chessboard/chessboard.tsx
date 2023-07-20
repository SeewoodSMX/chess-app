import React from 'react';
import './chessboard.scss';
import ChessField from './chessField/chessField';

export default function Chessboard() {
    const chessFieldChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const chessRowNumer = [8, 7, 6, 5, 4, 3, 2, 1];
    const createChessboard = (): JSX.Element => {
        return (
            <div className='chessboard'>
                {chessRowNumer.map((rowIndex) => {
                    return (
                        <div className='chessboard__row' key={rowIndex}>
                            {chessFieldChar.map((fieldChar, fieldIndex) => {
                                return (
                                    <ChessField
                                        key={fieldIndex}
                                        row={rowIndex as rowIndex}
                                        columnChar={fieldChar as columnChar}
                                        color={
                                            (rowIndex + fieldIndex) % 2
                                                ? 'black'
                                                : 'white'
                                        }
                                    ></ChessField>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        );
    };
    return createChessboard();
}
