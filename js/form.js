
// validación de formulario:

(() => {
  "use strict";
  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity()) {
          Swal.fire({
            icon: "success",
            title: "Perfecto!",
            text: "Gracias por contactarte con nosotros",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Por favor, complete correctamente el formulario",
          });
        }
        form.classList.add("was-validated");
      },
      false
    );
  });

  let email = document.getElementById("email");
  email.oninput = () => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email.value)) {
      email.setCustomValidity("Invalid field.");
      email.classList.add("is-invalid");
    } else {
      email.classList.remove("is-invalid");
      email.setCustomValidity("");
    }
  };

  let phone = document.getElementById("phone");
  phone.oninput = () => {
    const phoneValidation = document.getElementById("phone");
    if (isNaN(phone.value)) {
      phone.setCustomValidity("Invalid field.");
      phone.classList.add("is-invalid");
    } else {
      phone.classList.remove("is-invalid");
      phone.setCustomValidity("");
    }
  };
})();

//Para que se envíe un mail con mail JS usando FETCH:

const formulario = document.getElementById("formulario");
const btn = document.getElementById("enviarMail");

document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    btn.value = "Enviando...";

    const serviceID = "default_service";
    const templateID = "template_qb9rwdb";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.value = "Enviar";
      },
      (err) => {
        btn.value = "Enviar";
        alert(JSON.stringify(err));
      }
    );
  });
