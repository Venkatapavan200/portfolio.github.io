let header = document.querySelector('header');
let menu =  document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menu.onclick = () => {
    navbar.classList.toggle('active');
}

    //darkmode

let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if (darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
}
else{
    darkmode.classList.replace('bx-sum', 'bx-moon');
    document.body.classList.remove('active');
}
}



    
 