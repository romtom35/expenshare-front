import React, {Component} from 'react';
import {Redirect} from "react-router-dom";

class GroupId extends Component {

    constructor(props) {
        super(props);
        this.state = { slug: "", sharegroup: null };
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({ slug: event.target.value });
    }

    handleCreate(event) {
        event.preventDefault();
        fetch('http://localhost/php/expenshare/expenshare-back/public/sharegroup/', {
            method: 'POST',
            body: JSON.stringify({ slug: this.state.slug })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                alert('Nouveau groupe créé avec succès !');
            })
            .catch(err => alert('Erreur lors de la création du groupe'))
        ;
    }

    handleOpen(event) {
        event.preventDefault();
        fetch('http://localhost/php/expenshare/expenshare-back/public/sharegroup/' + this.state.slug)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ sharegroup: data });
            })
            .catch(err => {
                alert('Ce groupe n\'existe pas !');
            })
        ;
    }

    render() {

        if (this.state.sharegroup) {
            return <Redirect to={'/group/' + this.state.sharegroup.slug}/>
        }
        return (
            <div className="mt-5">
            <h1 className="text-center">Expenshare</h1>
            <form className="mt-5" onSubmit={e => this.handleCreate(e)}>
                <div className="form-group text-center col-md-6 m-0 m-auto">
                    <label htmlFor="idgroup" className="text-center h3 mb-3">Saisissez l'identifiant de votre groupe</label>
                    <input type="text" value={this.state.slug} className="form-control text-center" id="idgroup" onChange={e => this.handleChange(e)} placeholder="Group ID"/>
                </div>
                <div className="text-center mt-3">
                <button type="submit" className="btn btn-primary mr-2 px-3" onClick={e => this.handleCreate(e)}>Créer</button>
                <button type="submit" className="btn btn-success ml-2 px-3" onClick={e => this.handleOpen(e)}>Ouvrir</button>
                </div>
            </form>
            </div>
        );
    }
}

export default GroupId;