import React, {Component} from 'react';
import Menu from "./Menu";
import {Route} from "react-router-dom";
import Dashbord from "./Dashbord/Dashbord";
import PersonList from "./Persons/PersonList";
import ExpenseList from "./Expenses/ExpenseList";

class Group extends Component {

    constructor(props) {
        super(props);
        this.state = {sharegroup: null};
    }
    componentDidMount() {

        fetch('http://localhost/php/expenshare/expenshare-back/public/sharegroup/' + this.props.match.params.slug, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => this.setState({sharegroup: data}))
    }
    render() {

        if (!this.state.sharegroup) {
            return <div>Chargement en cours...</div>;
        }

        return (
            <React.Fragment>
                <Menu url={this.props.match.url}/>
                <Route exact path={this.props.match.url} render={(props) => <Dashbord {...this.state}/>}/>
                <Route path={this.props.match.url + '/personnes'} render={(props) => <PersonList {...this.state} {...props}/>}/>
                <Route path={this.props.match.url + '/depenses'} render={(props) => <ExpenseList {...this.state} {...props}/>}/>
            </React.Fragment>
        );
    }
}

export default Group;