import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "reactstrap";
import GroupId from "./Component/GroupId";
import './App.css';
import {Route} from "react-router-dom";

class App extends Component {

  render() {
    return (
        <Container>
            <GroupId/>
        </Container>
    );
  }
}

export default App;
