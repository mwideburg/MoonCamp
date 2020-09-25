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
    // openLogin(){
    //     this.props.closeModal('login')
    // }
    componentWillUnmount(){
        if(this.props.errors){
            this.props.removeErrors()
        }
        
    }
    componentDidMount() {
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
        // debugger
        let buttonType = (this.props.modalType === 'switch_signup') ? this.props.otherButton: (<a onClick={this.props.closeModal} className="modal-close">X</a>)
        return (
            <div>
                {/* {buttonType} */}
                
            <div>
                {/* <button className='user-button logout-button-fix'> LOG OUT</button> */}
                <form onSubmit={this.handleSubmit} className="login-form-box">
                {/* <a onClick={this.props.closeModal} className="modal-close">X</a> */}
                <br/>
                    <div className="login-form">
                        <div className="form-top-container">
                        {/* <label>FirstName: </label> */}
                        
                        <input type="text"
                                value={this.state.firstname}
                                onChange={this.update('firstname')}
                                className="login-input"
                                placeholder="First Name"
                            />
                        
                        <br />
                        {/* <label>Lastname:  </label> */}
                        <input type="text"
                                value={this.state.lastname}
                                onChange={this.update('lastname')}
                                className="login-input"
                                placeholder="Last Name"
                            />
                        


                        </div>
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
                        
                        
                            <button className="btn-submit" type="submit"> {this.props.formType}</button>
                        <br/>
                        <ul>
                        {this.props.errors.map(error => (
                            <li key={error} className="signupError">
                                {error}
                            </li>
                        ))}
                        </ul>
                        <br/>
                        <center>

                        <p>Have an Account?{this.props.otherForm}</p>
                        </center>
                    </div>
                </form>
            </div>
            </div>
            
        );
    }
}

export default SignUpForm;
