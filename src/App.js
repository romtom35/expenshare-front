import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Container} from "reactstrap";
import GroupId from "./Component/GroupId";
import './App.css';
import {Route} from "react-router-dom";
import Group from "./Component/Group";

class App extends Component {



    render() {
    return (
        <Container>
            <Route exact path="/" component={GroupId}/>
            <Route path="/group/:slug" component={Group}/>
        </Container>
    );
  }
}

export default App;
