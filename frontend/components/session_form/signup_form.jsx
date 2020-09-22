import React from 'react';

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
                            />
                        
                        <br />
                        <label>Lastname:  </label>
                        <input type="text"
                                value={this.state.lastname}
                                onChange={this.update('lastname')}
                                className="login-input"
                            />
                        
                        <br />
                        <label>Email:  </label>
                        <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                            />
                        
                        <br />
                        <label>Password:</label>
                        <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        
                        <br />
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUpForm;
