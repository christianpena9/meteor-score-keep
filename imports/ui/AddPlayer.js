import React from 'react';

// Below is the mongo database
import { Players } from './../api/players';

/* Below code one way to export the component */
/* export default Titlebar ... */
class AddPlayer extends React.Component {
    handleSubmit(e) {
        let playerName = e.target.playerName.value;
        
        e.preventDefault();
        
        if(playerName) {
            e.target.playerName.value = '';
            Players.insert({
                name: playerName,
                score: 0
            });
        }
    }
    
    render() {
        return(
            <div className="item">
                <form className="form" onSubmit={this.handleSubmit.bind(this)}>
                    <input className="form__input" type="text" name="playerName" placeholder="Player name" autoComplete="off"/>
                    <button className="button">Add Player</button>
                </form>
            </div>
        );
    }
}

/* Below code is another way to export the component */
export default AddPlayer;