import React from 'react';

function Home(){
    return(
        <div>
        <div>
        <div className='home-brand'>
        <span>Habit Tracker</span>
        </div>
        <div className='home-intro'>
        <span>"Good Habits are worth being Fanatical about" - John Irving</span>
        </div>
        <div className='home-habit-route'>
        <a className='home-habit-link' href='/habits'>Lets Get Started</a>
        </div>
        </div>

        </div>
    )
}

export default Home;