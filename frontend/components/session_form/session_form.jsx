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
            
            
                <div className="login-form-container ">
                <form onSubmit={this.handleSubmit} className="login-form-box signup-placeholder">
                   
                    <br/>
                    <div className="form-title-container">
                        <center>
                            <h2>Welcome back!</h2>
                            <p>Lets get you to space!</p>
                        </center>
                    </div>
                    <div className="login-form">
                        
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                                placeholder="email: captainpicard@space.com"
                            />
                        
                        <br />
                        
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                                placeholder="password: EarlGrayHot!"
                                
                            />
                       
                        <br />
                    <ul className="">
                        {this.props.errors.map(error => (
                            <li key={error} className="list-padding">
                                {error}
                            </li>
                        ))}
                    </ul> 
                        <button className="btn-submit" type="submit"> {this.props.formType}</button>
                    </div>
                   
                
                    <div className="text-anchor-bottom">

                    <p className="text-anchor-bottom">Don't have an account?  {this.props.otherForm}</p> 
                    </div>       
                    
                </form>
                </div>
            
            
        );
    }
}

export default SessionForm;
