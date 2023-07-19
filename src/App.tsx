import React from 'react';
import './styles/App.scss';
import Chessboard from './chessboard';

function App() {
    return (
        <div className='content'>
            <h1 className='pageTitle'>chess</h1>
            <Chessboard></Chessboard>
        </div>
    );
}

export default App;
