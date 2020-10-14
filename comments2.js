let commentForm = document.querySelector('.comment-form');
let list1 = document.querySelector('.list-1');
let name = document.querySelector('.name');
let email = document.querySelector('.email');

commentForm.onsubmit = function(evt) {
    evt.preventDefault();
        let liNew = document.createElement('li');
        let pNew = document.createElement('p');
        liNew.textContent = name.value;
        list1.append(liNew);
        pNew.textContent = textarea.value;
        liNew.append(pNew);
        console.log(pNew);  
        textarea.value = 'Написать комментарий...';
        name.value = '';
        email.value = '';
}