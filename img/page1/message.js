let textarea = document.querySelector('textarea');
let msg = document.querySelector('.msg');
let btnSbm = document.querySelector('.btn-submit');

textarea.oninput = function() {
    if(textarea.value.length < 10 || textarea.value.length > 200) {
        msg.classList.add('red');
        btnSbm.disabled = true;
    } else {        
        msg.classList.remove('red');
        btnSbm.disabled = false;
    }
}
