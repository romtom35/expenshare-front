import React, {Component} from 'react';

class PersonItem extends Component {

    constructor(props) {
        super(props);
        this.state = {person: this.props.person.id}
    }


    handleDelete(event) {
        event.preventDefault();
        fetch('http://localhost/php/expenshare/expenshare-back/public/person/' + this.props.person.id, {
            method: 'DELETE',

        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                alert('Modification de la dépense créée avec succès !');
                window.location.href = window.location.href.substr(0, window.location.href.length - 0);
            })
            .catch(err => alert('Erreur lors de la modification de la dépense'))
        ;
    }
    render() {

        const depenses = (this.props.person.expense.length > 1) ? <span>dépenses</span> : <span>dépense</span>;

        return (
            <div className="d-flex row mt-3">
            <div className="card bg-light col-md-6 py-2">
                <p className='align-middle m-0'>
                    <span className="font-weight-bold lead">{this.props.person.firstname} {this.props.person.lastname}</span> {this.props.person.expense.length} {depenses} ({this.props.person.expense.reduce((accumulator, expense) => accumulator + parseFloat(expense.amount), 0)} €)
                </p>
            </div>
            <button className="btn btn-danger px-3 ml-5" onClick={e => this.handleDelete(e)}>Supprimer</button>
            </div>
        );
    }
}

export default PersonItem;