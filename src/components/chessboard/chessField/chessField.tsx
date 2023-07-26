import React from 'react';
import './chessfield.scss';

export default function ChessField({ row, columnChar, color, image }: Props) {
    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        console.log(columnChar + ' ' + row);
    };
    return (
        <div
            onClick={handleClick}
            className={`chess__field chess__field--${color}`}
        >
            <img src={image} alt='error' />
        </div>
    );
}
