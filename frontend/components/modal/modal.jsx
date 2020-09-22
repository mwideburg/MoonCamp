import React from 'react';
import { Link } from 'react-router-dom';

class Modal extends React.Component{
    overlayOnClick(){
        this.props.onClose()
    }
    render(){
        return(
            <div>
                <div className="modal-overlay">
                    <div className="modal-content" onClick={this.overlayOnClick().bind(this)}>
                        <h1>This is a Modal</h1>
                    </div>

                </div>
            </div>
        )
    }

}

export default Modal