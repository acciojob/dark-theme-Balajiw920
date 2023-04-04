//your code here
const appDiv = document.getElementById('app');
const swapBtn = document.getElementById('swap');

function swapTheme() {
if (appDiv.classList.contains('day')) {
appDiv.classList.remove('day');
appDiv.classList.add('night');
swapBtn.classList.remove('button_day');
swapBtn.classList.add('button_night');
} else {
appDiv.classList.remove('night');
appDiv.classList.add('day');
swapBtn.classList.remove('button_night');
swapBtn.classList.add('button_day');
}
}

swapBtn.addEventListener('click', swapTheme);
