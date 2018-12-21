import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {categories:[], category: null, title:"", amount:"", person:null};
    }
    componentDidMount() {

        fetch('http://localhost/php/expenshare/expenshare-back/public/category/', {
            method: 'GET',
            headers: {'X-Requested-With': 'XMLHttpRequest'}
        })
            .then(response => response.json())
            .then(data => this.setState({categories: data}))
    }

    handleCreate(event) {
        event.preventDefault();
        fetch('http://localhost/php/expenshare/expenshare-back/public/expense/', {
            method: 'POST',
            headers: {'X-Requested-With': 'XMLHttpRequest'},
            body: JSON.stringify({
                title: this.state.title,
                amount: this.state.amount,
                category: this.state.category,
                person: this.state.person
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                alert('Nouvelle dépense créée avec succès !');
                window.location.href = window.location.href.substr(0, window.location.href.length - 3);
            })
            .catch(err => alert('Erreur lors de l\'ajout de la dépense'))
        ;
    }


    render() {

        const categories = this.state.categories.map(category => <option key={category.id} value={category.id}>{category.label}</option>);
        const persons = this.props.sharegroup.person.map(person => <option key={person.id} value={person.id}>{person.firstname}</option>)

        return (
            <div className="mb-3">
                <form className=" card col-md-8 m-auto bg-light">
                    <h2 className="text-center mt-3 mb-3">Ajouter une dépense</h2>
                    <div className="form-group row justify-content-center">
                        <label htmlFor="titre" className="col-sm-2 col-form-label text-center">Titre</label>
                        <div className="col-md-6">
                            <input type="text" className="form-control" id="titre" placeholder="Titre" onChange={e => this.setState({title: e.target.value})}/>
                        </div>
                    </div>
                    <div className="form-group row justify-content-center">
                        <label htmlFor="amount" className="col-sm-2 col-form-label text-center">Montant</label>

                            <div className="input-group mb-2 mr-sm-2 col-md-6">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">€</div>
                                </div>
                            <input type="text" className="form-control" id="amount" placeholder="Montant" onChange={e => this.setState({amount: e.target.value})}/>
                            </div>

                    </div>
                    <div className="form-group row justify-content-center">
                        <label htmlFor="exampleFormControlSelect1" className="col-sm-2 col-form-label text-center">Categories</label>
                        <div className="col-md-6 ">
                        <select className="form-control" id="exampleFormControlSelect1" onChange={e => this.setState({category: e.target.value})}>
                            {categories}
                        </select>
                        </div>
                    </div>
                    <div className="form-group row justify-content-center">
                        <label htmlFor="exampleFormControlSelect1" className="col-sm-2 col-form-label text-center">Personnes</label>
                        <div className="col-md-6 ">
                            <select className="form-control" id="exampleFormControlSelect1" onChange={e => this.setState({person: e.target.value})}>
                                {persons}
                            </select>
                        </div>
                    </div>
                    <div className="d-flex mb-3 justify-content-center">
                        <button className="btn btn-danger ml-3 px-5">Annuler</button>
                        <button className="btn btn-success ml-3 px-5" onClick={e => this.handleCreate(e)}>Valider</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;