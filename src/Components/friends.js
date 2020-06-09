import React from 'react';

class Friends extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            closeFriends: [
                "Phil",
                "Clint",
                "Steven",
                "Jon"
            ],
            coworkers: [],
            extendedFriends: [
                "Damon",
                "Dave B.",
                "Dave M.",
                "Millie"
            ]
        }

    }

    render() {
        return (
            <div className="friends-container">
                <h2>Close Friends</h2>
            </div>
        )
    }
}

export default Friends