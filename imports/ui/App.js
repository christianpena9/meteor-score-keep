import React from 'react';
import PropTypes from 'prop-types';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

class App extends React.Component {
    render() {
        return (
            <div>
                <TitleBar title={this.props.title} subtitle={this.props.subtitle}/>
                {/*
                    When not using component the below tag is used to render 
                    some JavaScript values
                    <h1>{title}</h1>
                */}
                <div className="wrapper">
                    <PlayerList players={this.props.players}/>
                    <AddPlayer/>
                </div>
            </div>
        );
    }
};

App.propTypes = {
    title: PropTypes.string.isRequired,
    players: PropTypes.array.isRequired
}

export default App;