import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Element
const name = "Emil";
const element = <h1>Hello, {name}!</h1>;
const root = document.getElementById("root");

//Component
function Hobby(props) {
    return <h2>Moje hobby to {props.hobby}.</h2>;
}
function Imie(props) {
  return <h2>Mam na imię {props.name}.</h2>
}
function Emotion(props) {
  return <h2>{props.feeling} twoje {props.part}! :)</h2>
}

// State i Lifecycle
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div>
        <h2>Jest godzina {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
// Event Handling
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {display: 0};
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    this.setState({
      display: this.state.display + 1
    });
  }
  decrement() {
    this.setState({
      display: this.state.display - 1
    });
  }
  render() {
    return (
      <div>
        <p>Możesz kliknąć przyciski by podnieść lub obniżyć numer!</p>
        <button onClick={this.increment}>+</button>
        <span> {this.state.display} </span>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

// List i Key
function List(props) {
  const numbers = ["Pierwszy", "Drugi", "trzeci", "Czwarty", "Piąty"];
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ol>{listItems}</ol>
  );
}

// Form
 

// Wyswietlanie
function Body() {
  return (
    <div>
      <hr />
      <Imie name="Emil" />
      <Hobby hobby="Koszykówka" />
      <Emotion feeling="Uwielbiam" part="oczy" />
      <hr />
      <Clock />
      <hr />
      <Button />
      <List />
      <hr />
    </div>
  );
}
ReactDOM.render(
  <Body />,
  root
);
