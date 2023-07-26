import React from 'react';
import './chessboard.scss';
import ChessField from './chessField/chessField';

export default function Chessboard() {
    function importAll(r: __WebpackModuleApi.RequireContext) {
        const images: { [key: string]: string } = {};
        r.keys().forEach((item) => {
            images[item.replace('./', '')] = r(item);
        });
        return images;
    }
    const images = importAll(
        require.context('../../chess-set', false, /\.(png|jpe?g|svg)$/)
    );
    console.log(images);

    const chessFieldChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const chessRowNumer = [8, 7, 6, 5, 4, 3, 2, 1];
    const createChessboard = (): JSX.Element => {
        return (
            <div className='chessboard'>
                <div className='chessboard__label chessboard__label--top'>
                    {chessFieldChar.map((fieldChar, fieldIndex) => {
                        return (
                            <div
                                className='chessboard__label-info'
                                key={fieldIndex}
                            >
                                {fieldChar}
                            </div>
                        );
                    })}
                </div>

                {chessRowNumer.map((rowIndex) => {
                    return (
                        <div className='chessboard__row' key={rowIndex}>
                            <div
                                className='chessboard__label-side-info chessboard__label-side-info--left'
                                key={rowIndex}
                            >
                                <p className='__number'>{rowIndex}</p>
                            </div>
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
                                        image={images['b-bishop.png']}
                                    ></ChessField>
                                );
                            })}
                            <div
                                className='chessboard__label-side-info chessboard__label-side-info--right'
                                key={rowIndex + 10}
                            >
                                {rowIndex}
                            </div>
                        </div>
                    );
                })}
                <div className='chessboard__label chessboard__label--bottom'>
                    {chessFieldChar.map((fieldChar, fieldIndex) => {
                        return (
                            <div
                                className='chessboard__label-info'
                                key={fieldIndex}
                            >
                                {fieldChar}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };
    return createChessboard();
}
