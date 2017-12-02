import React from 'react';
import ReactDom from 'react-dom';

import './styles/app.scss';

import Header from './components/header';
import CowsayButton from './components/cowsayButton';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <CowsayButton />
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
