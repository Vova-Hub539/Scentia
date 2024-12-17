import React from 'react';
import './style.css'
import Sidebar from './components/Sidebar';
import Tools from './components/Tools';

function App() {
    return (
        <div className='scentia'>
            <Sidebar />
            <div className='page-content'>
                <Tools />
            </div>
        </div>
    );
}

export default App;