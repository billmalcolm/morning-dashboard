import React from 'react';
import Weather from './../Containers/weather.js';


class Header extends React.Component {
    render() {
        const date = new Date();
        return (
            <header className="App-header">
                <div className="inner">
                    <h1>Personal Planner</h1>
                    <div>
                        <p className="date">{date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}</p>
                        <Weather />
                    </div>
                    <div className="fortune">
                        <p>You will obtain your goal if you maintain your course.</p>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;