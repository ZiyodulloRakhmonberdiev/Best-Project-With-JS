import { openModal, closeModal } from "./modal";
function smartForm(modalTimer) {
  //SMART FORM
  const forms = document.querySelectorAll("form");
  const message = {
    loading: "Loading",
    success: "You were succsessfully registrated",
    failure: "Error",
  };
  forms.forEach((item) => {
    bindPostData(item);
  });
  const postData = async (url, data) => {
    const res = await (url,
    fetch(url, {
      method: "POST",
      headers: "application/json",
      body: data,
    }));
    return await res.json();
  };

  function bindPostData(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const statusMessage = document.createElement("div");
      statusMessage.textContent = message.loading;
      form.append(statusMessage);

      form.insertAdjacentElement("afterend", statusMessage);
      const formData = new FormData(form);
      const json = JSON.stringify(Object.fromEntries(formData.entries()));
      // const object = {};
      // formData.forEach(function (value, key) {
      //   object[key] = value;
      // });
      postData("http://localhost:3000/requests", json)
        .then((data) => {
          console.log(data);
          showThanksModal(message.success);
        })
        .catch(() => {
          showThanksModal(message.failure);
        })
        .finally(() => {
          form.reset();
          statusMessage.remove();
        });
    });
  }
  function showThanksModal() {
    const prevModalDialog = document.querySelector(".modal__dialog");
    prevModalDialog.classList.add("hide");
    openModal(".modal", modalTimer);
    const thanksModal = document.createElement("div");
    thanksModal.classList.add("modal__dialog");

    thanksModal.innerHTML = `
      <div class="modal__content">
        <div class="modal__close" data-close>x</div>
        <div class="modal__title">${message.success}</div>

      </div>
    `;
    document.querySelector(".modal").append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add("show");
      prevModalDialog.classList.remove("hide");
      closeModal(".modal", modalTimer);
    }, 4000);
  }
}
export default smartForm;
