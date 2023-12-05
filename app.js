const toggle = document.getElementById('sun');
const body = document.querySelector('body');
console.log(body)
toggle.addEventListener('click', function () {
    this.classList.toggle('fa-moon');
    if (this.classList.toggle('fa-sun')) {
        body.style.setProperty('--bgcolor', 'paleturquoise')
        body.style.setProperty('--primarycolor', 'lightseagreen')
        body.style.setProperty('--bordercolor', 'black')
        body.style.transition = '1s';
    }
    else {
        body.style.setProperty('--bgcolor', 'black')
        body.style.setProperty('--primarycolor', '#198c8c')
        body.style.setProperty('--bordercolor', 'white')
        body.style.transition = '1s';
    }
})