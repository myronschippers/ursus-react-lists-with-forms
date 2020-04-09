import React, { Component } from 'react';
import Header from '../Header/Header';
import './App.css';

class App extends Component {
  state = {
    // for tracking entered data on fields
    newCreature: {
      name: 'Dragon',
      origin: 'Chinese',
    },
    // point of truth
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

  changeNewCreatureName = (event) => {
    this.setState({
      newCreature: {
        ...this.state.newCreature, // dumps in previous / current state into new object
        name: event.target.value,
      }
    });
  }

  changeNewCreatureOrigin = (event) => {
    this.setState({
      newCreature: {
        ...this.state.newCreature,
        origin: event.target.value,
      }
    });
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
              onChange={this.changeNewCreatureName}
              required
            />
          </label>
          <label>
            <span>Origin:</span>
            <input
              type="text"
              placeholder="Creature's Origin"
              name="origin"
              onChange={this.changeNewCreatureOrigin}
              required
            />
          </label>

          <button>Save Creature</button>
        </form>

        <div className="container">
          <h2>New Creature</h2>
          <p>Name: {this.state.newCreature.name}</p>
          <p>Origin: {this.state.newCreature.origin}</p>
        </div>

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
