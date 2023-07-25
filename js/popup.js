const obj = [
  {
    img: { mb: './assets/Snapshoot1.svg', dk: './assets/Snapshoot1-dk.svg' },
    story: { mb: 'Tonic', dk: 'Tonic' },
    pt: {
      mb: ['CANOPY', 'Back End Dev', '2015'],
      dk: ['FACEBOOK', 'Full Stack Dev', '2015'],
    },
    dist: {
      mb: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      dk: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    },
    tag: {
      mb: ['HTML', 'CSS', 'JavaScript'],
      dk: ['HTML', 'CSS', 'JavaScript'],
    },
  },
  {
    img: { mb: './assets/Snapshoot2.svg', dk: './assets/Snapshoot2-dk.svg' },
    story: { mb: 'Multi-Post Stories', dk: 'Multi-Post Stories' },
    pt: {
      mb: ['CANOPY', 'Back End Dev', '2015'],
      dk: ['Uber', 'Lead Developer', '2018'],
    },
    dist: {
      mb: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      dk: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    },
    tag: {
      mb: ['HTML', 'CSS', 'JavaScript'],
      dk: ['html', 'Ruby on rails', 'css', 'JavaScript'],
    },
  },
  {
    img: { mb: './assets/Snapshoot3.svg', dk: './assets/Snapshoot3-dk.svg' },
    story: { mb: 'Tonic', dk: 'Facebook 360' },
    pt: {
      mb: ['CANOPY', 'Back End Dev', '2015'],
      dk: ['FACEBOOK', 'Full Stack Dev', '2015'],
    },
    dist: {
      mb: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      dk: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    },
    tag: {
      mb: ['HTML', 'CSS', 'JavaScript'],
      dk: ['HTML', 'CSS', 'JavaScript'],
    },
  },
  {
    img: { mb: './assets/Snapshoot4.svg', dk: './assets/Snapshoot4-dk.svg' },
    story: { mb: 'Multi-Post Stories', dk: 'Uber Navigation' },
    pt: {
      mb: ['CANOPY', 'Back End Dev', '2015'],
      dk: ['Uber', 'Lead Developer', '2018'],
    },
    dist: {
      mb: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      dk: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    },
    tag: {
      mb: ['HTML', 'CSS', 'JavaScript'],
      dk: ['html', 'Ruby on rails', 'css', 'JavaScript'],
    },
  },
];

function createListItem(text) {
  const li = document.createElement('li');
  li.textContent = text;
  return li;
}

function createCard(objItem) {
  const article = document.createElement('article');
  article.classList.add('card');

  const img1 = document.createElement('img');
  img1.classList.add('mb');
  img1.src = objItem.img.mb;
  img1.alt = 'Snapshoot';

  const img2 = document.createElement('img');
  img2.classList.add('dk');
  img2.src = objItem.img.dk;
  img2.alt = 'Snapshoot';

  const section = document.createElement('section');
  section.classList.add('card-dist');

  const h21 = document.createElement('h2');
  h21.textContent = objItem.story.mb;
  h21.className = 'mb';

  const h22 = document.createElement('h2');
  h22.textContent = objItem.story.dk;
  h22.className = 'dk';

  const ul1 = document.createElement('ul');
  ul1.classList.add('primary-text', 'mb');
  objItem.pt.mb.forEach((item) => {
    ul1.appendChild(createListItem(item));
  });

  const ul2 = document.createElement('ul');
  ul2.classList.add('primary-text', 'dk');
  objItem.pt.dk.forEach((item) => {
    ul2.appendChild(createListItem(item));
  });

  const p1 = document.createElement('p');
  p1.classList.add('paragraph', 'mb');
  p1.textContent = objItem.dist.mb;

  const p2 = document.createElement('p');
  p2.classList.add('paragraph', 'dk');
  p2.textContent = objItem.dist.dk;

  const ul3 = document.createElement('ul');
  ul3.classList.add('tag', 'mb');
  objItem.tag.mb.forEach((item) => {
    ul3.appendChild(createListItem(item));
  });

  const ul4 = document.createElement('ul');
  ul4.classList.add('tag', 'dk');
  objItem.tag.dk.forEach((item) => {
    ul4.appendChild(createListItem(item));
  });

  const button = document.createElement('button');
  button.classList.add('btn');
  button.type = 'button';
  button.textContent = 'See project';

  section.append(h21, h22, ul1, ul2, p1, p2, ul3, ul4, button);

  article.append(img1, img2, section);
  return article;
}

const worksSection = document.getElementById('works');

obj.forEach((item) => {
  const cardArticle = createCard(item);
  worksSection.appendChild(cardArticle);
});

function createPopup(objItem) {
  const articleContainer = document.createElement('article');
  articleContainer.className = 'pop-up-container';

  const sectionPopup = document.createElement('section');
  sectionPopup.id = 'pop-up';

  const divHeadin = document.createElement('div');
  divHeadin.className = 'headin';

  const h2Mb = document.createElement('h2');
  h2Mb.className = 'mb';
  h2Mb.textContent = objItem.story.mb;

  const h2Dk = document.createElement('h2');
  h2Dk.className = 'dk';
  h2Dk.textContent = objItem.story.dk;

  const imgDeletePopup = document.createElement('img');
  imgDeletePopup.id = 'delete-popup';
  imgDeletePopup.src = './assets/IconCancel.svg';
  imgDeletePopup.alt = 'Cancel';

  divHeadin.append(h2Mb, h2Dk, imgDeletePopup);

  const ulPrimaryTextMb = document.createElement('ul');
  ulPrimaryTextMb.className = 'primary-text pt mb';
  objItem.pt.mb.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    ulPrimaryTextMb.appendChild(li);
  });

  const ulPrimaryTextDk = document.createElement('ul');
  ulPrimaryTextDk.className = 'primary-text pt dk';
  objItem.pt.dk.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    ulPrimaryTextDk.appendChild(li);
  });

  const imgCardMb = document.createElement('img');
  imgCardMb.className = 'card-img mb';
  imgCardMb.src = objItem.img.mb;
  imgCardMb.alt = 'Snapshoot';

  const imgCardDk = document.createElement('img');
  imgCardDk.className = 'card-img dk';
  imgCardDk.src = objItem.img.dk;
  imgCardDk.alt = 'Snapshoot';

  const sectionParaContainer = document.createElement('section');
  sectionParaContainer.className = 'para-container';

  const pParaMb = document.createElement('p');
  pParaMb.className = 'paragraph-popup mb';
  pParaMb.textContent = objItem.dist.mb;

  const pParaDk = document.createElement('p');
  pParaDk.className = 'paragraph-popup dk';
  pParaDk.textContent = objItem.dist.dk;

  const articleParaLink = document.createElement('article');
  articleParaLink.className = 'para-link';

  const ulPopupTagsMb = document.createElement('ul');
  ulPopupTagsMb.className = 'popup-tags mb';
  objItem.tag.mb.forEach((tagItem) => {
    const li = document.createElement('li');
    li.textContent = tagItem;
    ulPopupTagsMb.appendChild(li);
  });

  const ulPopupTagsDk = document.createElement('ul');
  ulPopupTagsDk.className = 'popup-tags dk';
  objItem.tag.dk.forEach((tagItem) => {
    const li = document.createElement('li');
    li.textContent = tagItem;
    ulPopupTagsDk.appendChild(li);
  });

  const ulPopupBtn = document.createElement('ul');
  ulPopupBtn.className = 'popup-btn';

  const btnLive = document.createElement('button');
  btnLive.className = 'live l-btn';
  btnLive.textContent = 'See live';

  const btnSource = document.createElement('button');
  btnSource.className = 'source l-btn';
  btnSource.textContent = 'See source';

  ulPopupBtn.append(btnLive, btnSource);
  sectionParaContainer.append(pParaMb, pParaDk, articleParaLink);
  articleParaLink.append(ulPopupTagsMb, ulPopupTagsDk, ulPopupBtn);

  sectionPopup.append(
    divHeadin,
    ulPrimaryTextMb,
    ulPrimaryTextDk,
    imgCardMb,
    imgCardDk,
    sectionParaContainer,
  );

  articleContainer.appendChild(sectionPopup);

  const parentElement = document.querySelector('body');
  parentElement.appendChild(articleContainer);
}

createPopup(obj[1]);