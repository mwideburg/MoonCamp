mymodalFuction = () => {
var modal_form = document.getElementById('modal_form')
var btn = document.getElementById('modal-btn')
var modal_container = document.getElementsByClassName('login-form-container')
var span = document.getElementsByClassName('close')

btn.onsubmit = function () {
    console.log("hello");
   
}

// () => {
//     console.log("hello");
//     modal.style.display = "block";
// }

span.onclick = () => {
    modal.style.display = 'none'
}

window.onclick = event => {
    if(event.target === modal){
        modal.display.style = 'none'
    }
}
}
