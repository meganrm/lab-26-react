import React from 'react';
import PropTypes from 'prop-types';

class CowSays extends React.Component {
  render() {
    return (<pre>{this.props.cowSays}</pre>);
  }
}

CowSays.propTypes = {
  cowSays: PropTypes.string.isRequired,
};

export default CowSays;
