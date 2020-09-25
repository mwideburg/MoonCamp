import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }
    componentWillUnmount() {
        if (this.props.errors) {
            this.props.removeErrors()
        }
    }
    componentDidMount(){
        if (this.props.errors) {
            this.props.removeErrors()
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
     
        
    }


    render() {
        const errors = this.props.errors
        return (
            
            
                <>
                <form onSubmit={this.handleSubmit} className="login-form-box signup-placeholder">
                   
                    <br/>
                    <div className="login-form">
                        <label>Email:</label>
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                                placeholder="captainpicard@space.com"
                            />
                        
                        <br />
                        <label>Password: </label>
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                                placeholder="3ngage!"
                                
                            />
                       
                        <br />
                        <button className="btn-submit" type="submit"> {this.props.formType}</button>
                    </div>
                   
                    <ul>
                        {this.props.errors.map(error => (
                            <li key={error} className="errors">
                                {error}
                            </li>
                        ))}
                    </ul> 
                
                    <div className="text-anchor-bottom">

                    <p className="text-anchor-bottom">Don't have an account?  {this.props.otherForm}</p> 
                    </div>       
                    
                </form>
                </>
            
            
        );
    }
}

export default SessionForm;
