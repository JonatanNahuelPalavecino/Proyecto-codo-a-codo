const contacto_form = document.querySelector(".contacto-formulario-form");
const form_nombre = document.querySelector("#nombre");
const form_telefono = document.querySelector("#telefono");

contacto_form.addEventListener("submit", (event) => {
  event.preventDefault();

  form_nombre.value = form_nombre.value.trim();

  const valida_telefono = Number(form_telefono.value.trim());

  if (isNaN(valida_telefono)) {
    alert("Asegurate de ingresar sólo números en tu teléfono");
  }
});
