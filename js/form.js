
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
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

