const button = document.getElementById('ButtonMenu');
const menu = document.getElementById('menu-list');

button.addEventListener('click', () => {
  if (menu.classList.contains('active')) {
    menu.classList.add('closing');
    menu.addEventListener('animationend', () => {
        menu.classList.remove('active', 'closing');
        menu.style.display = 'none';
    }, {once: true});
  } else {
    menu.style.display = 'flex';
    requestAnimationFrame(() => menu.classList.add('active'));
  }
});

