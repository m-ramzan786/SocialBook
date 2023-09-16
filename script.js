const settingsMenu = document.querySelector('.settings-menu');
const DarkBtn = document.querySelector('#dark-btn');
function settingsMenuToggle() {
    settingsMenu.classList.toggle('settings-menu-height');
}

DarkBtn.addEventListener('click', () => {
    DarkBtn.classList.toggle('dark-btn-active');
    document.body.classList.toggle("dark-theme")

    if (localStorage.getItem('theme') === 'light') {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
})

if (localStorage.getItem('theme') === 'light') {
    DarkBtn.classList.remove('dark-btn-active');
    document.body.classList.remove("dark-theme")
} else if (localStorage.getItem('theme') === 'dark') {
    DarkBtn.classList.add('dark-btn-active');
    document.body.classList.add("dark-theme")
} else {
    localStorage.setItem('theme', 'light');
}


// localStorage.setItem('theme', 'dark-theme');
// localStorage.getItem('theme');