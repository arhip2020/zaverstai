let themes = document.querySelectorAll('.theme');
let filter = document.querySelector('.filter');
let hidden = document.querySelector('.hidden');
//console.log(themes[0].dataset.category);
//console.log(filter.value);

filter.onchange = function() {
    for(let i of themes) {
        if(i.dataset.category !== filter.value && filter.value !== 'all') {
            i.classList.add('hidden');
        } else {
            i.classList.remove('hidden');
        }
    }    
}