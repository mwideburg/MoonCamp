import React from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        // debugger
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        
        e.preventDefault();
        
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }


    render() {
        return (
            <div className="login-form-container" >
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="login-form">
                        <label>FirstName: </label>
                        <input type="text"
                                value={this.state.firstname}
                                onChange={this.update('firstname')}
                                className="login-input"
                                placeholder="First Name"
                            />
                        
                        <br />
                        <label>Lastname:  </label>
                        <input type="text"
                                value={this.state.lastname}
                                onChange={this.update('lastname')}
                                className="login-input"
                                placeholder="Last Name"
                            />
                        
                        <br />
                        <label>Email:  </label>
                        <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                                placeholder="Email"
                            />
                        
                        <br />
                        <label>Password:</label>
                        <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                                placeholder="minimum 6 characters"
                            />
                        
                        <br />
                        <input className="session-submit" type="submit" value={this.props.formType} />
                        <br/>
                        <p>Have an Account? <Link to="/login" className="user-button">Log in</Link></p>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUpForm;
