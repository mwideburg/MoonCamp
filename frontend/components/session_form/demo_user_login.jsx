import React from 'react';
import { Link } from 'react-router-dom';

class DemoUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: 'enterprise@startrek.com',
            password: 'earlgrayhot'
        };
        // 
        // this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    componentDidMount(){
        this.props.processForm(this.state)
    }
    render() {
        return (      
            <div >
                
            </div>   
        );
    }
}

export default DemoUser;
