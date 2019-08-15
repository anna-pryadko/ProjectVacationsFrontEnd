import React, { Component }  from 'react';


class ToggleSwitch extends Component {

    render() {

        console.log("props : " , this.props)
        return (
        )
    }    
}

ToggleSwitch.propTypes = {
  theme: PropTypes.string,
  enabled: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func
  ]),
  onStateChanged: PropTypes.func
}

export default ToggleSwitch;