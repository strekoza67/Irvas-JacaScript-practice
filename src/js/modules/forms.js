// const forms = () => {
//   let form = document.querySelectorAll('form'),
//     inputs = document.querySelectorAll('input'),
//     phoneInputs = document.querySelectorAll('input[name="user_phone"]');

//   phoneInputs.forEach(item => {
//     item.addEventListener('input', () => {
//       item.value = item.value.replace(/\D/, '');
//     });
//   });

//   const message = {
//     loading: 'Загрузка...',
//     success: 'Спасибо! Скоро мы с вами свяжемся',
//     failure: 'Что-то пошло не так'
//   };

//   const postData = async (url, data) => {
//     document.querySelector('.status').textContent = message.loading;
//     let res = await fetch(url, {
//       method: "POST",
//       body: data
//     });

//     return await res.text();
//   };

//   const clearInputs = () => {
//     inputs.forEach(item => {
//       item.value = '';
//     });
//   };

//   form.forEach(item => {
//     item.addEventListener('submit', (e) => {
//       e.preventDefault();

//       let statusMessage = document.createElement('div');
//       statusMessage.classList.add('status');
//       item.appendChild(statusMessage);

//       const formData = new FormData(item);

//       postData('assets/server.php', formData)
//         .then(res => {
//           console.log(res);
//           statusMessage.textContent = message.success;
//         })
//         .catch(() => statusMessage.textContent = message.failure)
//         .finally(() => {
//           clearInputs();
//           setTimeout(() => {
//             statusMessage.remove();
//           }, 10000);
//         });
//     });
//   });
// };

// export default forms;

const forms = () => {
  let form = document.querySelectorAll('form'),
    inputs = document.querySelectorAll('input'),
    phoneInputs = document.querySelectorAll('input[name="user_phone"]');

  phoneInputs.forEach(item => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/\D/, '');
    });
  });

  let message = {
    success: 'Спасибо! С Вами свяжутся через пару минут',
    loading: 'Отправка...',
    failure: 'Не удалось отправить :('
  };

  const postFormData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading;

    let res = await fetch(url, {
      method: "POST",
      body: data
    });

    return await res.text();
  };

  const clearInputs = () => {
    inputs.forEach(item => {
      item.value = '';
    });
  };

  form.forEach(item => {
    item.addEventListener('submit', (e) => {
      e.preventDefault();

      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.appendChild(statusMessage);

      let formData = new FormData(item);

      postFormData('assets/server.php', formData)
        .then(res => {
          console.log(res);
          statusMessage.textContent = message.success;
        })
        .catch(() => {
          statusMessage.textContent = message.failure;
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
          }, 10000);
        });
    });
  });
};

export default forms;