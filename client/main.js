import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

// Below is the mongo database
import { Players, calculatePlayerPositions } from './../imports/api/players';

// Below is the compnents
import App from './../imports/ui/App';

Meteor.startup(() => {
    Tracker.autorun(() => {
        let players = Players.find({}, {sort: {score: -1}}).fetch();
        let positionedPlayers = calculatePlayerPositions(players);
        let title = 'Score Keep';
        let subtitle = 'Created by: Christian Pena';
        ReactDOM.render(<App title={title} players={positionedPlayers} subtitle={subtitle}/>, document.getElementById('app'));
    });
});