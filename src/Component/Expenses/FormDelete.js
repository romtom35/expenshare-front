import React, {Component} from 'react';

class FormDelete extends Component {

    constructor(props) {
        super(props);
        this.state = {expense: this.props.id}
    }


    handleDelete(event) {
        event.preventDefault();
        fetch('http://localhost/php/expenshare/expenshare-back/public/expense/' + this.props.id, {
            method: 'DELETE',

        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                alert('Suppression de la dépense avec succès !');
                window.location.href = window.location.href.substr(0, window.location.href.length - 6);
            })
            .catch(err => alert('Erreur lors de la suppression de la dépense'))
        ;
    }
    render() {
        return (
            <div>
                <button className="btn btn-warning mt-3 ml-3 align-middle" onClick={e => this.handleDelete(e)}>Valider la suppression</button>
            </div>
        );
    }
}

export default FormDelete;