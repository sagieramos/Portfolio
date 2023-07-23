const checkbox = document.querySelector('#menu-checkbox');
const blurList = ['#logo', '#headline', 'main'];
const navHeader = document.querySelector('.nav-header');

function handleNavigation(e) {
  const { target } = e;
  if (target.matches('#logo, .hamburger-menu, .Portforlio *, .About *, .Contact *')) {
    e.preventDefault();
    checkbox.checked = !checkbox.checked;
    blurList.forEach((item) => document.querySelector(item).classList.toggle('blur'));
    document.documentElement.classList.toggle('disable-overflow');
  }

  if (target.matches('.Portforlio *')) {
    document.querySelector('#works').scrollIntoView({ behavior: 'smooth' });
  } else if (target.matches('.About *')) {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  } else if (target.matches('.Contact *')) {
    document.querySelector('#contact-form').scrollIntoView({ behavior: 'smooth' });
  } else {
    document.querySelector('header').scrollIntoView({ behavior: 'smooth' });
  }
}

navHeader.addEventListener('click', handleNavigation);
navHeader.addEventListener('touchstart', handleNavigation);