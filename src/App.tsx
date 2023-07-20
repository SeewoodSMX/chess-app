import React from 'react';
import './styles/app.scss';
import Chessboard from './components/chessboard/chessboard';

function App() {
    return (
        <div className='content'>
            <h1 className='page-title'>chess</h1>
            <Chessboard></Chessboard>
        </div>
    );
}

export default App;
