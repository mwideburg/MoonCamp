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

    
    // checkUser(){
    //     if(this.state.session.id){
    //         return true
    //     }
    //     return false
    // }
    render(){

        return(
            
    //         // <div className=".recent-views-container">
    //         // {/* map through activities to put them on the splash with a limit */}
    //         // {/* have a single acitivty-item that will render a list item with the picture
    //         // and link to the specific search content page */}
    //         // {/* place inside a ul */}
    //         // <div className="spots-img">
    //         // </div>
    //         // <Link to="/" className="spot-details">
    //         // <div className="spot-details">
    //         //     <h3 className="spot-title">Euorpas Crator</h3>
    //         //     <p> Zues's Land</p>
    //         //     <div className="spot-data">
    //         //     {/* this.props.reviews and whatever */}
    //         //     <p>59 reviews</p>
    //         //     <p>$6200/day</p>
    //         //     </div>
    //         // </div>
    //         // </Link>
              
    //         // </div>
            <>
            <h2>Recenetly viewed moonsites:</h2>
            <div className="recent-views-wrapper">
                
                <Spot />
                <Spot />
                <Spot />
            </div>
            </>
            
        )
    }
}

export default RecentView;