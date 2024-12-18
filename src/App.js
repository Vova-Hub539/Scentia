import React, { useState } from 'react';
import './style.css'
import Sidebar from './components/Sidebar';
import Tools from './components/Tools';
import GeneratedPdgPage from './components/GeneratedPdfPage';

function App() {
    const [lessonPlan, setLessonPlan] = useState('');

    return (
        <div className='scentia'>
            <Sidebar />
            <div className='page'>
                {/* <GeneratedPdgPage lessonPlan={lessonPlan} setLessonPlan={setLessonPlan} /> */}
                {lessonPlan ? <GeneratedPdgPage lessonPlan={lessonPlan} setLessonPlan={setLessonPlan} /> : <Tools setLessonPlan={setLessonPlan} />}
            </div>
        </div>
    );
}

export default App;