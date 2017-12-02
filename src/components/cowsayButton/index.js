import React from 'react';
import { say } from 'cowsay';

import CowSays from '../cowsay';

class CowsayButton extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      cowSay: '',
    };
  }

  onClick() {
    const cowSay = say({ text: 'grazing in the browser', wrapLength: 40, wrap: true });
    this.setState({ cowSay });
    console.log();
  }

  render() {
    return (
      <div>
        <button onClick={this.onClick}>Cow speak </button>
        <CowSays cowSays={this.state.cowSay} />
      </div>
    );
  }
}

export default CowsayButton;
