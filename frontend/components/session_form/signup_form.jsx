import React from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            zipcode: ''
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
            <div className="login-form-container ">
            <div>
                {/* {buttonType} */}
                
                <div >
                {/* <button className='user-button logout-button-fix'> LOG OUT</button> */}
                <form onSubmit={this.handleSubmit} className="login-form-box">
                {/* <a onClick={this.props.closeModal} className="modal-close">X</a> */}
                       
                    <div  className="login-form" >
                        <div className="form-title-container">
                                <center>
                                    <h2>Join MoonCamp</h2>
                                    <p>Discover the best moon bases near me</p>
                                </center>
                        </div>
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
                    
                        {/* <label>Email:  </label> */}
                        <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                                placeholder="Email"
                            />
                        
                        
                        <br />
                        {/* <label>Password:</label> */}
                        <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                                placeholder="minimum 6 characters"
                            />
                            <input type="text"
                                value={this.state.zipcode}
                                onChange={this.update('zipcode')}
                                className="login-input"
                                placeholder="Zip code"
                            />
                        
                 
                        <div className="row">
                                <input type="checkbox" name="email" id="email-subscribe" />
                                <p className="font-small-gray"> I'm curious about how we can camp out in space?</p>

                        </div>
                            <ul className="no-margin">
                                {this.props.errors.map(error => (
                                    <li key={error} className="list-padding">
                                        {error}
                                          
                                    </li>
                                ))}
                            </ul>
                        
                            <button className="btn-submit" type="submit"> {this.props.formType}</button>
                        <br/>
                        
                        <br/>
                        <center>
                                <p className="font-small-gray"> By signing up, I agree to MoonCamps
                                don't eat out in space policy.</p>
                                <br/>
                        <p>Have an Account?{this.props.otherForm}</p>
                        </center>
                    </div>
                </form>
            </div>
            </div>
            </div>
        );
    }
}

export default SignUpForm;
