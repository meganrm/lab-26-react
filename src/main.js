import React from 'react';
import ReactDom from 'react-dom';
import superagent from 'superagent';

import './styles/app.scss';

import Header from './components/header';
import CowsayButton from './components/cowsayButton';

const pokeemonAPI = 'https://pokeapi.co/api/v2/pokemon/';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: [],
      pokemon: {},
    };
  }

  componentWillMount() {
    superagent.get(pokeemonAPI)
      .then((result) => {
        const pokemonList = result.body.results;
        this.setState(pokemonList);
      }).catch();
  }

  componentDidMount() {
    console.log(this.state);
  }

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
