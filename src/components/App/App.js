import React, { Component } from 'react';
import Header from '../Header/Header';
import './App.css';

class App extends Component {
  state = {
    creaturesList: [
      {
        name: 'Unicorn',
        origin: 'Kansas City',
      },
      {
        name: 'Sphinx',
        origin: 'Egypt',
      },
      {
        name: 'Dryad',
        origin: 'Greece',
      },
      {
        name: 'Kappa',
        origin: 'Japan',
      },
    ]
  }

  render() {
    const creatureElements = this.state.creaturesList.map((item, index) => {
      return (
        <li key={index}>
          The {item.name} originated in {item.origin}.
        </li>
      );
    });

    return (
      <div>
        <Header />

        <form className="container">
          <label>
            <span>Name:</span>
            <input
              type="text"
              placeholder="Creature's Name"
              name="name"
              required
            />
          </label>
          <label>
            <span>Origin:</span>
            <input
              type="text"
              placeholder="Creature's Origin"
              name="origin"
              required
            />
          </label>

          <button>Save Creature</button>
        </form>

        <div className="container">
          <ul>
            {creatureElements}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
