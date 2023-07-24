const checkbox = document.querySelector('#menu-checkbox');
const blurList = ['#logo', '#headline', 'main'];
const navHeader = document.querySelector('.nav-header');

const sections = {
  portfolio: document.querySelector('#works'),
  about: document.querySelector('#about'),
  contact: document.querySelector('#contact-form'),
  header: document.querySelector('header'),
};

function handleNavigation(e) {
  const { target } = e;
  let sectionId = null;
  e.preventDefault();
  if (target.matches('.hamburger-menu, .Portforlio *, .About *, .Contact *')) {
    checkbox.checked = !checkbox.checked;
    blurList.forEach((item) => document.querySelector(item).classList.toggle('blur'));
    document.documentElement.classList.toggle('disable-overflow');
  }
  if (target.matches('.Portforlio *')) sectionId = 'portfolio';
  else if (target.matches('.About *')) sectionId = 'about';
  else if (target.matches('.Contact *')) sectionId = 'contact';
  else if (target.matches('#logo')) sectionId = 'header';
  if (sectionId !== null) sections[sectionId].scrollIntoView({ behavior: 'smooth' });
}

navHeader.addEventListener('click', handleNavigation);
navHeader.addEventListener('touchstart', handleNavigation);