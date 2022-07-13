import React from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "./components/Clock.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br></br>
          <Container fluid>
          <Row>
          <Col><Clock timeZone="Asia/Singapore" /></Col>
          <Col><Clock timeZone="Europe/London" /></Col>
          <Col><Clock timeZone="America/Los_Angeles" /></Col>
          </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default App;