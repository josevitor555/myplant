let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.nav-menu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');

    if (menu.classList.contains('bx-x')) {
        console.log('O menu está aberto!');
    } else {
        console.log('O menu está fechado!');
    }
}