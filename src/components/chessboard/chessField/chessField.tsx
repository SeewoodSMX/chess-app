import React from 'react';
import './chessfield.scss';

export default function ChessField({ row, columnChar, color }: Props) {
    return <div className={`chess__field chess__field--${color}`}></div>;
}
