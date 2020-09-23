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


    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
     
        
    }


    render() {
        return (
            
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <button onClick={this.props.closeModal} className="user-button modal-close">X</button>
                    <br/>
                    <div className="login-form">
                        <label>Email:</label>
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                                placeholder="CaptainPicard@space.com"
                            />
                        
                        <br />
                        <label>Password: </label>
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                                
                            />
                       
                        <br />
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                    <br/>
                    <p className="errors">{this.props.errors}</p> 
                    <br/>
                <p>Don't have an account?  {this.props.otherForm}
                
                    
                </p> 
                </form>
            </div>
         
            
        );
    }
}

export default SessionForm;
