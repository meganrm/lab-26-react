import React from 'react';
import { say } from 'cowsay';
import getFakerData from '../../logics/getFakerData';
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
    const cowSayText = `Hello ${getFakerData()}`;
    const cowSay = say({ text: cowSayText });
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
