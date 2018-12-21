import React, {Component} from 'react';
import {NavLink, Route} from "react-router-dom";
import FormUpdate from "./FormUpdate";
import FormDelete from "./FormDelete";
import Moment from "react-moment";

class ExpenseItem extends Component {


    render() {

        const expenses = this.props.person.expense.map(exp =>
            <div key={exp.id}
                 className="d-flex row justify-content-between bg-light p-3 mb-3">
                <p>
                     <span className="font-weight-bold lead"><i className={'fas fa-2x ' + exp.category.icon}/> {exp.title} ({exp.amount}€)</span> payé
                    par {this.props.person.firstname} {this.props.person.lastname} le <Moment format="DD/MM/YYYY">{exp.createdAt}</Moment>

                </p>
                <div>
                    <NavLink to={this.props.url + '/delete'} className="btn btn-danger ml-3 align-middle">Supprimer</NavLink>
                    <NavLink to={this.props.url + '/update'} className="btn btn-success ml-3">Modifier</NavLink>

                    <Route path={this.props.url + '/delete'}
                           render={(props) => <FormDelete {...this.props} {...props} id={exp.id}/>}/>

                </div>
                <Route path={this.props.url + '/update'}
                       render={(props) => <FormUpdate {...this.props} {...props} title={exp.title} amount={exp.amount}
                                                      category={exp.category.id} person={this.props.person.id} id={exp.id}/>}/>
            </div>);


        return (
            <div className="">
                {expenses}
            </div>
        );
    }
}

export default ExpenseItem;