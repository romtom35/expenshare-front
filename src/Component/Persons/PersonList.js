import React, {Component} from 'react';
import PersonItem from "./PersonItem";
import {NavLink, Redirect, Route} from "react-router-dom";
import FormAdd from "./FormAdd";

class PersonList extends Component {


    render() {

        if (!this.props.sharegroup) {
            return <div>Chargement en cours...</div>;
        }
        const persons = this.props.sharegroup.person.map(person => <PersonItem key={person.id} person={person}/>)

        return (
            <div className="mt-3">
                <h2 className="text-center my-3">Dépenses du groupe {this.props.sharegroup.slug}</h2>
                <div className="d-flex justify-content-center">
                    <NavLink to={this.props.match.url + '/add'} className="btn btn-primary text-center mb-3 pl-3 pr-3">Ajouter une personne</NavLink>
                </div>
                <Route path={this.props.match.url + '/add'} render={(props) => <FormAdd {...this.props} {...props}/>}/>

                {persons}
            </div>
        );
    }
}

export default PersonList;