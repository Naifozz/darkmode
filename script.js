let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('darkmode-toggle');

const enableDarkmode = () => {
    document.body.classList.toggle('darkmode');
    localStorage.setItem('darkmode', 'active');
}

const disableDarkmode = () => {
    document.body.classList.toggle('darkmode');
    localStorage.removeItem('darkmode', null);
}

themeSwitch.addEventListener('click', () => {
    if (darkmode == 'active') {
        disableDarkmode();
    } else {
        enableDarkmode();
    }
    
})