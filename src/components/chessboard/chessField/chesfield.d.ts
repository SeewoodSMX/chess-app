interface Props {
    row: rowIndex;
    columnChar: columnChar;
    color: chessFieldColor;
}

type rowIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 ;
type columnChar = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h';
type chessFieldColor = 'white' | 'black';