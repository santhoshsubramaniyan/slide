'use strict';

const reviewsCont = document.querySelector('.reviews-cont');
const leftArrow = document.querySelector('[data-testid=leftArrow]');
const rightArrow = document.querySelector('[data-testid=rightArrow]');

const reviewsData = [
  {
    imgSrc:
      'https://6479694e782f454c53cca3e7--stately-pegasus-d11c65.netlify.app/image/wade-warren-img.png',
    userName: 'Wade Warren',
    companyName: 'Rang',
    review:
      'The most important thing I learnt is that nothing is a failure,but what we learn from that is a rich and rewarding experience.',
  },
  {
    imgSrc:
      'https://6479694e782f454c53cca3e7--stately-pegasus-d11c65.netlify.app/image/adrian-williams-img.png',
    userName: 'Adrian Williams',
    companyName: 'Wheel0',
    review:
      'Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.',
  },
  {
    imgSrc:
      'https://6479694e782f454c53cca3e7--stately-pegasus-d11c65.netlify.app/image/sherry-jhonson-img.png',
    userName: 'Sherry Johnson',
    companyName: 'MedX',
    review:
      'I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.',
  },
  {
    imgSrc:
      'https://6479694e782f454c53cca3e7--stately-pegasus-d11c65.netlify.app/image/ronald-jones-img.png',
    userName: 'Ronald Janes',
    companyName: 'Infinos Tech',
    review:
      'I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.',
  },
];

let reviewIndex = 0;

function updateReview() {
  const review = reviewsData[reviewIndex];
  reviewsCont.querySelector('.profile-img').src = review.imgSrc;
  reviewsCont.querySelector('.user-name').textContent = review.userName;
  reviewsCont.querySelector('.company-name').textContent = review.companyName;
  reviewsCont.querySelector('.review').textContent = review.review;
}

leftArrow.addEventListener('click', () => {
  reviewIndex = (reviewIndex - 1 + reviewsData.length) % reviewsData.length;
  updateReview();
});

rightArrow.addEventListener('click', () => {
  reviewIndex = (reviewIndex + 1) % reviewsData.length;
  updateReview();
});
updateReview();
