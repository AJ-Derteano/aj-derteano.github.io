import { customAlert } from "../lib/alert/alert-lib.js";

let formatEmail =
  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
let inp = document.getElementsByClassName("inp-form");

for (let i = 0; i < inp.length; i++) {
  inp[i].addEventListener("keyup", function () {
    this.value.length >= 1
      ? this.nextElementSibling.classList.add("label-activo")
      : this.nextElementSibling.classList.remove("label-activo");
  });
}

let btnContactOpen = document.querySelector("#btn-contacto");
let btnCloseContact = document.querySelector(".span__btn-close-form");
let contactForm = document.querySelector(".div__footer-contacto");
btnContactOpen.onclick = () => {
  contactForm.classList.toggle("open");
};
btnCloseContact.onclick = () => {
  contactForm.classList.toggle("open");
};

let btnEnviar = document.querySelector("#btn-Enviar");

btnEnviar.onclick = () => {
  let name = document.getElementById("name").value;
  let consulta = document.getElementById("consulta").value;
  let correo = document.getElementById("email").value;
  let detalles = document.getElementById("txt-detalle").value;

  const data = validateData({
    name,
    email: correo,
    subject: consulta,
    details: detalles,
  });

  sendEmailMode();

  if (!formatEmail.test(correo)) {
    customAlert({
      title: "Formato de correo invalido",
      descrip: "Use un correo con el siguiente formato correo@correo.com",
    });
    sendEmailMode();
    return;
  }
  if (correo === "correo@correo.com") {
    customAlert({
      title: "No use el correo de ejemplo",
    });
    sendEmailMode();
    return;
  }

  if (data) {
    data.contacto=true;
    console.log(data)
    sendEmail(data);
  } else {
    sendEmailMode();
    customAlert({ title: "Rellene todos los campos." });
  }
};

//Funcion para validar los datos
function validateData({ name = "", email = "", subject = "", details = "" }) {
  if (name && email && subject && details) {
    let data = {
      name: name,
      email: email,
      subject: subject,
      details: details,
    };
    return data;
  } else {
    return false;
  }
}

let sendEmail =  (data) => {
  return fetch('controller/email', {method:'POST', body:JSON.stringify(data)})
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: res.statusText || "Ocurrio un error",
            })
      )
      .catch((err) => err);
}