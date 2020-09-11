import React from 'react';

class App extends React.Component {
  state = {
    name: 'Ryu',
    age: 30
  }

  render() {
    return (
      <div>
        <h1>My name is {this.state.name}</h1>
        <form>
          <input type="text"/>
        </form>
      </div>
    );
  }

}

export default App;
