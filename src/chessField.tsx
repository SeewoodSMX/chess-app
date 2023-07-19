import React from 'react';
import './styles/Chessboard.scss';
interface Props {
    color: string;
}
export default function ChessField({ color }: Props) {
    return (
        <div className='ChessField' style={{ backgroundColor: color }}></div>
    );
}
