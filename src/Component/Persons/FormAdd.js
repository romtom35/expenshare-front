import React, {Component} from 'react';

class FormAdd extends Component {
    constructor(props) {
        super(props);
        this.state = { firstname: "", lastname: "" };
    }

    handleChange1(event) {
        event.preventDefault();
        this.setState({ firstname: event.target.value });
    }
    handleChange2(event) {
        event.preventDefault();
        this.setState({ lastname: event.target.value });
    }

    handleCreate(event) {
        event.preventDefault();
        fetch('http://localhost/php/expenshare/expenshare-back/public/person/', {
            method: 'POST',
            headers: {'X-Requested-With': 'XMLHttpRequest'},
            body: JSON.stringify({
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                slug: this.props.sharegroup.slug
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                alert('Nouvelle personne créée avec succès !');
                window.location.href = window.location.href.substr(0, window.location.href.length - 3);
            })
            .catch(err => alert('Erreur lors de l\'ajout de la personne'))
        ;
    }
    render() {
        return (

                <form className="card col-md-6 m-auto bg-light">
                    <div className="row mt-3">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="First name" onChange={e => this.handleChange1(e)}/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Last name" onChange={e => this.handleChange2(e)}/>
                        </div>
                    </div>
                    <div className="text-center mt-3 mb-3">
                        <button type="submit" className="btn btn-success mr-2 px-5" onClick={e => this.handleCreate(e)}>Valider</button>
                    </div>
                </form>

        );
    }
}

export default FormAdd;