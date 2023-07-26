const checkbox = document.querySelector('#menu-checkbox');
const blurList = ['#logo', '#headline', 'main', '#about-container', '.white-bg'];
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
  if (target.matches('.hamburger-menu')) {
    checkbox.checked = !checkbox.checked;
    blurList.forEach((item) => document.querySelector(item).classList.toggle('blur'));
    document.documentElement.classList.toggle('disable-overflow');
  }
  if (target.matches('.Portforlio *')) sectionId = 'portfolio';
  else if (target.matches('.About *')) sectionId = 'about';
  else if (target.matches('.Contact *')) sectionId = 'contact';
  else if (target.matches('#logo')) sectionId = 'header';
  if (sectionId !== null) {
    checkbox.checked = false;
    sections[sectionId].scrollIntoView({ behavior: 'smooth' });
    blurList.forEach((item) => document.querySelector(item).classList.remove('blur'));
    document.documentElement.classList.remove('disable-overflow');
  }
}

navHeader.addEventListener('click', handleNavigation);
navHeader.addEventListener('touchstart', handleNavigation);

document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();

  const emailInput = document.getElementById('emailInput');
  const emailValue = emailInput.value;

  if (emailValue !== emailValue.toLowerCase()) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = 'Email must be in lower case.';
    errorMessage.style.display = 'block';
    setTimeout(() => {
      errorMessage.style.display = 'none';
    }, 2000);
  } else {
    const form = document.getElementById('form');
    form.submit();
  }
});
