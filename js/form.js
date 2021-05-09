import { customAlert } from "../lib/alert/alert-lib.js";

let formatEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
let inp = document.getElementsByClassName("inp-form");

for (let i = 0; i < inp.length; i++) {
  inp[i].addEventListener("keyup", function () {
    this.value.length >= 1
      ? this.nextElementSibling.classList.add("label-activo")
      : this.nextElementSibling.classList.remove("label-activo");
  });
}

let btnEnviar = document.querySelector("#btn-Enviar");

btnEnviar.onclick = () => {
  let name = document.getElementById("name").value;
  let consulta = document.getElementById("consulta").value;
  let correo = document.getElementById("email").value;
  let detalles = document.getElementById("txt-detalle").value;

  const data = validateData({
    name,
    email: correo,
    service: consulta,
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
    sendEmail(data);
  } else {
    sendEmailMode();
    customAlert({ title: "Rellene todos los campos." });
  }
};

//Funcion para validar los datos
function validateData({ name = "", email = "", service = "", details = "" }) {
  if (name && email && service && details) {
    let data = {
      name: name,
      email: email,
      service: service,
      details: details,
    };
    return data;
  } else {
    return false;
  }
}

function sendEmail(data) {
  /* $.ajax({
    type: "POST",
    url: "php/email",
    data: data,
    success: function (r) {
      if (r) {
        sendEmailMode();
        customAlert({
          title: "Correo enviado!!!",
          descrip: "Se ha enviado el correo, pronto te contactare.",
        });

        //Reiniciamos el formulario
        $("#form-contact")[0].reset();
      } else {
        sendEmailMode();
      }
    },
  }); */
  /* const http = new XMLHttpRequest();
  const url = "http://127.0.0.1:5500/index.html";
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
    } else {
      console.log('que paso 2');
    }

    http.open("GET", url);
    http.send();
  }; */

  customAlert({ title: "Pagina en desarrollo" });
  sendEmailMode();
}

//Desactivamos el loader
let sendEmailMode = () => {
  let spinerLoader = document.getElementById("spinner-loader");
  spinerLoader.classList.toggle("visible");
};
