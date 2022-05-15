const images = () => {
  const imgPopup = document.createElement('div'),
    workSection = document.querySelector('.works'),
    bigImage = document.createElement('img');

  imgPopup.classList.add('popup');
  workSection.appendChild(imgPopup);

  imgPopup.style.cssText = 'justify-content: center; display: none; align-items: center;';

  imgPopup.appendChild(bigImage);

  workSection.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target && e.target.matches('.preview')) {
      imgPopup.style.display = 'flex';
      const path = e.target.parentNode.getAttribute('href');
      bigImage.setAttribute('src', path);
    }

    if (e.target && e.target.matches('.popup')) {
      imgPopup.style.display = 'none';
    }
  });
};

export default images;