import React from 'react';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'


class App extends React.Component {
  state = {
    ninjas: [
      { name: "Ryu", age: 30, belt: "black", id: 1 },
      { name: "Ryu1", age: 34, belt: "black", id: 2 },
      { name: "Ryu2", age: 35, belt: "black", id: 3 },
      { name: "Ryu3", age: 30, belt: "black", id: 4 },
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random()
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })
  }

  deleteNinja = (id) => {

  }

  render() {
    return (
      <div>
        <h1>My first React app</h1>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }

}

export default App;
