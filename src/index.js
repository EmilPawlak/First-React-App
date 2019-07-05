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
  const numbers = ["Pierwszy", "Drugi", "Trzeci", "Czwarty", "Piąty"];
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ol>{listItems}</ol>
  );
}
// Conditional Rendering
function Toggle(props) {
    if (props.toggle) {
      return (
        <div style={{backgroundColor: "red"}}>.</div>
      );
    } else {
      return (
        <div style={{backgroundColor: "blue"}}>.</div>
      );
    }
}
class Background extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: 0};

    this.change = this.change.bind(this);

  }
  change() {
    this.setState({
      color: !this.state.color
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.change}>Zmień Kolor!</button>
        <Toggle toggle={this.state.color} />
      </div>
    );
  }
}

// Form
function SwitchBox (props) {
  if (props.box) {
    return (
      <span>True</span>
    );
  } else {
    return (
      <span>False</span>
    );
  };
}
function View (props) {
  return (
    <span>{props.view}</span>
  );
}
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.update = this.update.bind(this);
  }
  update(e) {
    debugger;
    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox"? target.checked : target.value;

    this.setState({
      [name] : value
    });
  }
  render() {
    return (
      <div>
        <p>Wypelnij formularz</p>
        <form onSubmit={this.update}>
          Login: <input type="text" name="login" onChange={this.update}/>
          <br />
          Haslo: <input type="password" name="password" onChange={this.update} />
          <br />
          E-mail: <input type="email" name="email" onChange={this.update} />
          <input type="checkbox" name="checkbox" onChange={this.update} checked={this.state.checkbox} />
          <br />
          <textarea name="textarea" onChange={this.update} />
          <select name="select" onChange={this.update}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <br />
          <input type="submit"/>
        </form>
        <p>Twoje dane!</p>
        Login: <View view={this.state.login} />
        <br />
        Haslo: <View view={this.state.password} />
        <br />
        E-mail: <View view={this.state.email} />
        <br />
        Przycisk: <SwitchBox box={this.state.checkbox} />
        <br />
        Pole tekstowe: <View view={this.state.textarea} />
        <br />
        Lista: <View view={this.state.select} />
      </div>
    );
  }
}

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
      <Background />
      <hr />
      <Form />
    </div>
  );
}
ReactDOM.render(
  <Body />,
  root
);
