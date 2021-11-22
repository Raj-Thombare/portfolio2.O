var menu = document.querySelector('#menu')
var burger = document.querySelector('#burger')

burger.addEventListener('click',() => {
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden')
    }else{
        menu.classList.add('hidden')
    }

    if(burger.classList.contains('rotate-0')){
        burger.classList.toggle('rotate-180')
    }   
})

