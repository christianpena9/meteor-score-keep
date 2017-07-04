import React from 'react';
import PropTypes from 'prop-types';

/* Below code one way to export the component */
/* export default Titlebar ... */
class TitleBar extends React.Component {
    renderSubTitle() {
        if(this.props.subtitle) {
            return <h2 className="title-bar__subtitle">{this.props.subtitle}</h2>;
        }
    }
    
    render() {
        return(
            <div className="title-bar">
                {/*
                    By default when you pass properties to a component, then you
                    can use that property here under the this.props object with
                    the property name that you send.
                */}
                <div className="wrapper">
                    <h1>{this.props.title}</h1>
                    {this.renderSubTitle()}
                </div>
            </div>
        );
    }
}

/*
    Allows us to specify the type and if it's required. This will thorw an
    error to the user with a warning when the type and required is not used
*/
TitleBar.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
};

/* Allows us to set default values to a specific prop */
TitleBar.defaultProps = {
    title: 'Default Title'
};

/* Below code is another way to export the component */
export default TitleBar;