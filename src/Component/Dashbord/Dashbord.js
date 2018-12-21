import React, {Component} from 'react';

class Dashbord extends Component {
    render() {
        return (
            <div>
                {console.log(this.props)}
                <h1 className="text-center my-3">Dashbord du groupe {this.props.sharegroup.slug}</h1>
            </div>
        );
    }
}

export default Dashbord;