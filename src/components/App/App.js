import React from 'react';
import './App.scss';
import Card from '../Card/Card';

const DATA = require('../../carrier_cards.json');

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      cards: [],
      searched: null,
      searchTime: null
    };
  }

  componentDidMount () {
    // API call would go here
    let time = Math.ceil(DATA.search_time/60000);

    this.setState({
      cards: DATA.carrier_cards,
      searched: DATA.carriers_searched,
      searchTime: time
    });
  }

  render () {
    let { cards, searched, searchTime } = this.state;

    return (
      <div className="app">

        {searched && searchTime &&
        <span>You just compared {searched} rates in {searchTime} minutes!</span>}

        {cards &&
        <div class="card-container">
          {cards.map(card => {
            return (
              <Card />
            );
          })}
        </div>}
      </div>
    );
  }
}

export default App;
