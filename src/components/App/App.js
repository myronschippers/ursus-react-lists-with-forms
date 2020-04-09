import React, { Component } from 'react';
import Header from '../Header/Header';
import './App.css';

class App extends Component {
  state = {
    // for tracking entered data on fields
    newCreature: {
      name: '',
      origin: '',
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

  // changeNewCreatureName = (event) => {
  //   this.setState({
  //     newCreature: {
  //       ...this.state.newCreature, // dumps in previous / current state into new object
  //       name: event.target.value,
  //     }
  //   });
  // }

  // changeNewCreatureOrigin = (event) => {
  //   this.setState({
  //     newCreature: {
  //       ...this.state.newCreature,
  //       origin: event.target.value,
  //     }
  //   });
  // }

  changeNewCreature = (event, creatureKey) => {
    this.setState({
      newCreature: {
        ...this.state.newCreature,
        [creatureKey]: event.target.value,
      }
    });
  }

  // save new creature to the list
  submitNewCreature = (event) => {
    // stop page refresh
    event.preventDefault();

    console.log('SUBMIT CREATURE');
    // add the creature to the list
    this.setState(
      {
        // clear form inputs
        newCreature: {
          name: '',
          origin: '',
        },
        // updating our list with new creature
        creaturesList: [
          // dump in everything from current creaturesList
          ...this.state.creaturesList,
          {
            ...this.state.newCreature
          }
        ]
      },
      () => {// callback for when state is updated
        console.log('New State:', this.state.creaturesList);
      }
    );
    console.log('New State:', this.state.creaturesList);
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

        <form onSubmit={this.submitNewCreature} className="container">
          <label>
            <span>Name:</span>
            <input
              type="text"
              placeholder="Creature's Name"
              name="name"
              value={this.state.newCreature.name}
              onChange={(event) => this.changeNewCreature(event, 'name')}
              required
            />
          </label>
          <label>
            <span>Origin:</span>
            <input
              type="text"
              placeholder="Creature's Origin"
              name="origin"
              value={this.state.newCreature.origin}
              onChange={(event) => this.changeNewCreature(event, 'origin')}
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
