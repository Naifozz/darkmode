let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('darkmode-toggle');

if (darkmode == 'true') {
    document.body.classList.add('darkmode');
    themeSwitch.checked = true;
}

themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('darkmode');
    if (document.body.classList.contains('darkmode')) {
        localStorage.setItem('darkmode', 'true');
    } else {
        localStorage.removeItem('darkmode');
    }
})