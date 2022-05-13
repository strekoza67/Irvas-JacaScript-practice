const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    let trigger = document.querySelectorAll(triggerSelector);
    let modal = document.querySelector(modalSelector);
    let close = document.querySelector(closeSelector);

    trigger.forEach(item => {
      item.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        // document.body.classList.add('modal-open');
      });
    });

    close.addEventListener('click', () => {
      modal.style.display = 'none';
      document.body.style.overflow = '';
      // document.body.classList.remove('modal-open');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        // document.body.classList.remove('modal-open');
      }
    });
  }

  function bindModalByTime(selector, time) {
    setTimeout(() => {
      document.querySelector(selector).style.display = 'block';
      document.body.style.overflow = 'hidden';
    }, time);
  }

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  bindModal('.phone_link', '.popup', '.popup .popup_close');
  bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');;
  // bindModalByTime('.popup', 60000);
};

export default modals;

