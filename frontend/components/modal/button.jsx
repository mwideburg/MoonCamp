// import { connect } from 'react-redux'
// import { hideModal, showModal } from '../../actions/modal_actions'
// import Modal from './modal'


// class LoginModal extends React.Component {
//     constructor() {

//     }
//     onClose() {
//         this.props.hideModal()
//     }

//     showLoginModal(){
//         this.props.showModal("LOGIN_MODAL")
//     }
//     render() {
//         return (
//             <button onClick={this.props.showLoginModal}></button>
//         )
//     }
// }
// const mapDispatchToProps = {
//     hideModal = () => hideModal(),
//     showModal = () => showModal('LOGIN_USER')
// }
// export default connect(null, mapDispatchToProps)(LoginModal)