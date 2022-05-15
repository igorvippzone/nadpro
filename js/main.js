document.addEventListener("DOMContentLoaded", () => {
  // mask
  $("#phone").mask("+7 (000) 000-00-00");

  // send-form and validation

  let formFeedback = document.getElementById("form-feedback");
  formFeedback.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(formFeedback);

    let formData = new FormData(formFeedback);

    if (error === 0) {
      formFeedback.classList.add("_sending");

      setTimeout(() => {
        formReset(formFeedback);
        formFeedback.classList.remove("_sending");
        alert("Заявка успешно отправлена");
      }, 1000);

      // let response = await fetch("sendmail.php", {
      //   method: "POST",
      //   body: formData,
      // });
      // if (response.ok) {
      //   let result = await response.json();
      //   alert(result.message);
      //   formPreview.innerHTML = '';
      //   form.reset();
      // } else {
      //   alert("Ошибка")
      // }
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll("._req");

    for (let i = 0; i < formReq.length; i++) {
      const input = formReq[i];
      formRemoveError(input);

      if (input.classList.contains("_name")) {
        if (input.value.trim().length < 6) {
          formAddError(input);
          error++;
        }
      } else if (input.classList.contains("_tel")) {
        if (input.value.trim().length < 18) {
          formAddError(input);
          error++;
        }
      } else if (
        input.getAttribute("type") === "checkbox" &&
        input.checked === false
      ) {
        formAddError(input);
        error++;
      }
    }

    return error;
  }

  function formAddError(input) {
    input.parentElement.classList.add("_error");
    // input.classList.add('_error');
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove("_error");
    // input.classList.remove('_error');
  }

  function formReset(form) {
    let inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
      input.value = "";
    });
  }
});

// let form = document.querySelector('form')
// let sendForm = document.querySelector('#send-form');
// sendForm.onclick = (event) =>{
//   event.preventDefault();
//   console.log("work")
// }
