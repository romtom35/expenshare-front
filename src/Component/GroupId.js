import React, {Component} from 'react';

class GroupId extends Component {

    constructor(props) {
        super(props);
        this.state = {slug: ''};
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('http://localhost/php/expenshare/expenshare-back/public/sharegroup/new', {
            method: 'POST',
            headers: {'X-Requested-With': 'XMLHttpRequest'},
            body: JSON.stringify({slug: this.state.slug})
        })
            .then(response => response.json())
            .then(data => this.setState({slug: data}))
    }


    render() {
        return (
            <form className="mt-5" onSubmit={event => this.handleSubmit(event)}>
                <div className="form-group text-center col-md-6">
                    <label htmlFor="idgroup" className="text-center">Saisissez l'identifiant de votre groupe</label>
                    <input type="text" value={this.state.slug} onChange={event =>this.setState({slug:event.target.value})} className="form-control text-center" id="idgroup" placeholder="Groupe ID"/>
                </div>
                <div className="text-center">
                <button type="submit" className="btn btn-primary mr-2">Créer</button>
                <button type="submit" className="btn btn-success ml-2">Ouvrir</button>
                </div>
            </form>
        );
    }
}

export default GroupId;