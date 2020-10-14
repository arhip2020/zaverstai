let like1 = document.querySelector('.like-1');
let like3 = document.querySelector('.like-3');


like1.onclick = function() {
    if(like1.classList.contains('added')) {
        like3.textContent--;
        //like1.classList.add('added');        
    } else {
        like3.textContent++; 
        //like1.classList.remove('added');       
    }
    
    like1.classList.toggle('added');
}