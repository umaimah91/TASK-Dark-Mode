/* TO Change light/Dark-Mode by */
let themeToggler = document.querySelector('.theme-toggler');

themeToggler.onclick = () => {

    themeToggler.classList.toggle('active');

    if (themeToggler.classList.contains('active')) {
        document.body.classList.add('active');
    } else {
        document.body.classList.remove('active');
    }

}


/* TO Select Specific Color */
document.querySelectorAll('.theme-colors .color').forEach(color => {
    color.onclick = () => {
        let background = color.style.background;
        document.querySelector(':root').style.setProperty('--main-color', background);
    }
});


/* Open/Close Side-nav  and move Body Content TO right*/
let theme = document.querySelector('.themes-container');

document.querySelector('#theme-open').onclick = () => {
    theme.classList.add('active');
    document.body.style.paddingRight = '350px'; // to move container
}

document.querySelector('#theme-close').onclick = () => {
    theme.classList.remove('active');
    document.body.style.paddingRight = '0px';
}