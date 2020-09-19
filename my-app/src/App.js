import React from 'react';
<<<<<<< HEAD
import About from './About';
import './App.css';
import Nav from './Nav';
import Shop from './Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ItemDetail from './ItemDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/shop" component={Shop} />
          <Route path="/shop/:id" component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
=======
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

>>>>>>> 0a7310dbde44c710a344b8899fa20c9af44c48c2
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
