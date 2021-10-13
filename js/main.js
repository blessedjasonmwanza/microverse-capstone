document.addEventListener('DOMContentLoaded', () => {
  const navMenu = document.querySelector('.nav-menu');
  const navMenuItems = document.querySelectorAll('.nav-menu a');
  const openNavTrigger = document.querySelector('.mobile-nav-trigger');
  const closeNavTrigger = document.querySelector('.close-nav-trigger');

  // Navigation controllers
  openNavTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    navMenu.style.display = 'flex';
  });
  closeNavTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    navMenu.style.display = 'none';
  });
  navMenuItems.forEach((element) => {
    element.addEventListener('click', () => {
      navMenu.style.display = 'none';
    });
  });

  // Featured Speakers Cards
  const speakersSection = document.querySelector('.featured-speakers-wrapper');
  const featuredSpeakers = [
    {
      names: 'Yochai Benkler',
      profileImg: 'images/image-1.png',
      occupation: 'Berkman Professor of Entrepreneurial Studies at Havard Law School',
      shortDiscription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ea veritatis similique assumenda numquam...',
    },
    {
      names: 'Kilnam Chone',
      profileImg: 'images/image-2.png',
      occupation: '',
      shortDiscription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ea veritatis similique assumenda numquam...',
    },
    {
      names: 'SohYeong Noh',
      profileImg: 'images/image-3.png',
      occupation: 'Director of Art centre Nobi and a board member of CC Korea',
      shortDiscription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ea veritatis similique assumenda numquam...',
    },
    {
      names: 'Julia Leda',
      profileImg: 'images/image-4.png',
      occupation: 'President of Young Pirates Europe',
      shortDiscription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ea veritatis similique assumenda numquam...',
    },
    {
      names: 'Lila Tretikov',
      profileImg: 'images/image-5.png',
      occupation: 'Executive Director of the Wikimedia Foundation',
      shortDiscription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ea veritatis similique assumenda numquam...',
    },
    {
      names: 'YRyan Merkly',
      profileImg: 'images/image-6.png',
      occupation: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
      shortDiscription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ea veritatis similique assumenda numquam...',
    },
  ];
  featuredSpeakers.forEach((speaker) => {
    speakersSection.innerHTML += `
      <article class="d-flex row speaker">
        <img src="${speaker.profileImg}" alt="speaker">
        <div class="d-inline-flex cols description">
          <h3>${speaker.names}</h3>
          <p  class="occupation">${speaker.occupation}</p>
          <hr class=" d-flex article-block-splitter">
          <p  class="occupation-info">${speaker.shortDiscription}</p>
        </div>
      </article>
    `;
  });
});