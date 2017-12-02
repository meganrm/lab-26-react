import React from 'react';

class CowSays extends React.Component {
  render() {
    return (<pre>{this.props.cowSays}</pre>);
  }
}

export default CowSays;
