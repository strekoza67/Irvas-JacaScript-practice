
import checkNumInputs from "./checkNumInputs";

const forms = (state) => {
  let form = document.querySelectorAll('form'),
    inputs = document.querySelectorAll('input');

  checkNumInputs('input[name="user_phone"]');

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
      if (item.getAttribute('data-calc') === "end") {
        for (let key in state) {
          formData.append(key, state[key]);
        }
      }

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