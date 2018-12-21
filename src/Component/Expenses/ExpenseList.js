import React, {Component} from 'react';
import ExpenseItem from "./ExpenseItem";
import {NavLink, Route} from "react-router-dom";
import Form from "./Form";

class ExpenseList extends Component {



    render() {
        if (!this.props.sharegroup) {
            return <div>Chargement en cours...</div>;
        }

        const expenses = this.props.sharegroup.person.map(person => <ExpenseItem key={person.id} person={person} {...this.props} url={this.props.match.url}/>)

        return (
            <div>
                <h2 className="text-center my-3">Dépenses du groupe {this.props.sharegroup.slug}</h2>
                <div className="d-flex justify-content-center">
                <NavLink to={this.props.match.url + '/add'} className="btn btn-primary text-center mb-3 pl-3 pr-3">Ajouter une dépense</NavLink>
                </div>
                <Route path={this.props.match.url + '/add'} render={(props) => <Form {...this.props} {...props}/>}/>
                {expenses}
            </div>
        );
    }
}

export default ExpenseList;