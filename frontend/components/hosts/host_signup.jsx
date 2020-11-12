import React from 'react'

class Host extends React.Component {
    render() {
        debugger
        return (
            <div className="login-form-container host-signup-container ">
                

                <center><h1> Currently not accepting any more hosts </h1></center>

                <p>
                    Hosting in space is really hard to accomplish, but if you would like
                    to be on our waitig list please check box to sign up.
                    
                </p>

                
                <br/>
                <div className="row">
                  <input type="checkbox" name="email" id="email-subscribe" />
                    <p className="font-small-gray"> I am ready to host</p> 
                </div>
                <button className="btn-submit" onClick={() => this.props.closeModal()}> Sign up to Host </button>
                

            </div>
        )
    }
}

export default Host