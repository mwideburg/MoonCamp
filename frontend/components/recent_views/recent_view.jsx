import React from 'react';
import { Link } from 'react-router-dom';
import Spot from './spots_placeholder'

// const RecentView = ({ currentUser, logout }) => {

//     const loginOrSignup = () => {
//         // debugger


//         return (
//             <nav className="links">
//                 {/* <button onClick={showLoginModal} className="user-button logout">MODAL</button> */}
//                 <Link to="/login" className="user-button" >Log In</Link>
//                 <Link to="/signup" className="user-button">Sign Up</Link>
//             </nav>
//         )
//     }
//     const hello = () => {
//         // debugger
//         return (
//             <div className="recent-views-wrapper">
//                 <h2>Recenetly viewed space camp:</h2>
//                  <Spot />
//                  <Spot />
//                 <Spot />
//             </div>
//         )
//     }

//     return currentUser ? hello() : loginOrSignup();
// }


// export default RecentView;

class RecentView extends React.Component {

    render(){
        const currentUser = this.props.currentUser
        if(currentUser){
            return(
                <>
                    <div className="recent-view-space">
                        <h2>Recenetly viewed moonsites:</h2>

                        <div className="recent-views-wrapper">


                            <Spot />
                            <Spot />
                            <Spot />
                        </div>
                    </div>
                    
                </>
            )
        }else{
            return (
                <>
                </>
            )
        }
        
    }
}

export default RecentView;