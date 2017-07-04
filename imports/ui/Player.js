import React from 'react';
import PropTypes from 'prop-types';

// Below is the mongo database
import { Players } from './../api/players';

/* Below code one way to export the component */
/* export default Titlebar ... */
class Player extends React.Component {
    render() {
        let itemClassName = `item item--position-${this.props.player.rank}`;
        return(
            <div key={this.props.player._id} className={itemClassName}>
                <div className="player">
                    <div>
                        <h3 className="player__name">{this.props.player.name}</h3>
                        <p className="player__stats">
                            {this.props.player.position} place: {this.props.player.score} points(s).
                        </p>
                    </div>
                    <div className="player__actions">
                        <button className="button button--round" onClick={() => Players.update(this.props.player._id, {$inc: {score: -1}})}>-1</button>
                        <button className="button button--round" onClick={() => Players.update(this.props.player._id, {$inc: {score: 1}})}>+1</button>
                        <button className="button button--round" onClick={() => Players.remove(this.props.player._id)}>X</button>
                    </div>
                </div>
                {/*Below is one way of updating and deleting the document*/}
                {/*
                    <button onClick={() => Players.remove({_id: player._id})}>X</button>
                    <button onClick={() => Players.update({_id: player._id}, {$inc: {score: -1}})}>-1</button>
                    <button onClick={() => Players.update({_id: player._id}, {$inc: {score: 1}})}>+1</button>
                */}
            </div>
        );
    }
};

/*
    Allows us to specify the type and if it's required. This will thorw an
    error to the user with a warning when the type and required is not used
*/
Player.propTypes = {
    player: PropTypes.object.isRequired
};

/* Below code is another way to export the component */
export default Player;