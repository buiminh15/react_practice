import React from 'react';

class App extends React.Component {
  constructor(props) {
    super()
    this.example1 = this.example1.bind(this);
  }
  state = {
    name: 'Ryu',
    age: 30,
  };
  handleClick(e) {
    console.log(e);
  }
  example1() {
    console.log(this)
  }
  example2 = () => {
    console.log(this)
  }
  render() {
    return (
      <div>
        <h1>Hey, ninjas</h1>
        <p>My name is {this.state.name}</p> and I am {this.state.age} years old
        <button onClick={this.example2}>Click Me</button>
      </div>
    );
  }
}

export default App;
