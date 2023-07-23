const checkbox = document.querySelector('#menu-checkbox');
const blurList = ['#logo', '#headline', 'main'];
const navHeader = document.querySelector('.nav-header');

function handleNavigation(e) {
    const { target } = e;
    e.preventDefault();
    if (target.matches('.hamburger-menu, .Portforlio *, .About *, .Contact *')) {
        checkbox.checked = !checkbox.checked;
        blurList.forEach(item => document.querySelector(item).classList.toggle('blur'));
        document.documentElement.classList.toggle('disable-overflow');
    } 
    
    if (target.matches('.Portforlio *')) {
        document.querySelector('#works').scrollIntoView({ behavior: 'smooth' });
    } else if (target.matches('.About *')) {
        document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
    } else if (target.matches('.Contact *')) {
        document.querySelector('#contact-form').scrollIntoView({ behavior: 'smooth' });
    }
}

navHeader.addEventListener('click', handleNavigation);
navHeader.addEventListener('touchstart', handleNavigation);