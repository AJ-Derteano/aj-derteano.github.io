/* let btnTest = document.querySelector("#test");
btnTest.onclick = function () {
  customAlert({
    id: 1,
    title: "Un bus a salido",
    descrip:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap",
    txtDecline: "Omitir",
    txtSuccess: "Ver",
    autoCloseAlert: true,
    timeLineAlert: true,
    afirmativoAlert: () => console.log("Envia tu evento o funcion a realizar"),
  });
};
 */

/**
 *
 * @param {id} ID Identificador o codigo del elemento
 * @param {title} title Titulo del alert
 * @param {descrip} decrip Descripcion o cuerpo del alert
 * @param {clickOk} clickOk Accion para ejecutar
 */
let customAlert = ({
  id = "",
  title = null,
  descrip = null,
  txtSuccess = null,
  txtDecline = null,
  afirmativoAlert = null,
  negativoAlert = null,
  closeAlert = (e) => fCloseAlert(e),
  timeLineAlert = false,
  autoClose = true,
  timeClose = 5000,
}) => {
  /* Creando nodos */
  //Contenedor de la alerta
  const html = document.querySelector("html");
  const aler = document.createElement("div");
  //Linia de tiempo
  const timeLine = document.createElement("div");
  //Boton cerrar
  const alertClose = document.createElement("div");
  //Cabezera alert
  const alertHeader = document.createElement("div");
  //Titulo header
  const headerTitle = document.createElement("p");
  //Cuerpo del alert
  const alertBody = document.createElement("div");
  //Descripcion del alert
  const bodyDesc = document.createElement("p");
  //Pie del alert
  const alertFooter = document.createElement("div");
  //Botones
  const alertBtnVer = document.createElement("span");
  const alertBtnSuccess = document.createElement("span");
  const alertBtnOmitir = document.createElement("span");
  const alertBtnWarning = document.createElement("span");

  /* Añadiendo clases */
  aler.className = "div__notificacion-alert open";
  timeLine.className = "div__notificacion-time-line";
  alertClose.className = "div__notificacion-alert-close";
  alertHeader.className = "div__notificacion-header";
  headerTitle.className = "p__notificacion-title";
  alertBody.className = "div__notificacion-body";
  bodyDesc.className = "p__text-desc";
  //Si se manda el texto para ambos botones, el grid sera de 2 columnas, si no de 1 solona columna
  txtSuccess && txtDecline
    ? (alertFooter.className = "div__notificacion-footer")
    : (alertFooter.className = "div__notificacion-footer-alone");

  //Si ambos existe manda el estilo compartido
  //Si no, verifica la existencia del otro en caso exista manda su estilo
  txtSuccess && txtDecline
    ? (alertBtnVer.className = "span__button span__button-success")
    : txtSuccess
    ? (alertBtnVer.className = "span__button span__button-success")
    : null;
  txtSuccess && txtDecline
    ? (alertBtnOmitir.className = "span__button span__button-warning")
    : txtDecline
    ? (alertBtnOmitir.className = "span__button span__button-warning")
    : null;
  /* alertBtnOmitir.className = "span__button-warning"; */

  //agregando cada nodo
  alertHeader.appendChild(headerTitle);
  alertBody.appendChild(bodyDesc);
  alertFooter.appendChild(alertBtnVer);
  alertFooter.appendChild(alertBtnOmitir);
  alertBtnVer.appendChild(alertBtnSuccess);
  alertBtnOmitir.appendChild(alertBtnWarning);

  //Verificando el contenido que se agregara
  timeLineAlert ? aler.appendChild(timeLine) : null;
  closeAlert ? aler.appendChild(alertClose) : null;
  title ? aler.appendChild(alertHeader) : null;
  descrip ? aler.appendChild(alertBody) : null;
  txtSuccess || txtDecline ? aler.appendChild(alertFooter) : null;

  /* Añadiendo atribudo data */
  aler.dataset.id = id;

  /* Añadiendo textos */
  headerTitle.textContent = title;
  bodyDesc.textContent = descrip;
  alertBtnSuccess.textContent = txtSuccess;
  alertBtnWarning.textContent = txtDecline;

  /* FUNCIONES */
  //Cerrar el alert
  const fCloseAlert = () => {
    aler.classList.remove("open");
    setTimeout(() => {
      html.removeChild(aler);
    }, 3000);
    return;
  };

  //Timer para cerrar el alert
  function fCloseAlertTime() {
    setTimeout(() => {
      //Se ejecuta
      afirmativoAlert ? afirmativoAlert() : null;
      //Se cierra
      fCloseAlert();
    }, timeClose);
  }

  /* Añadiendo las funciones */
  //Boton ver
  alertBtnVer.addEventListener("click", (e) => {
    afirmativoAlert(e.target);
  });
  //Boton omitir
  alertBtnOmitir.addEventListener("click", (e) => {
    clearTimeout(fCloseAlertTime);
    fCloseAlert(e.target);
  });
  //Boton cerrar
  alertClose.addEventListener("click", (e) => {
    clearTimeout(fCloseAlertTime);
    fCloseAlert(e.target);
  });

  autoClose ? fCloseAlertTime() : null;

  html.appendChild(aler);
};

export { customAlert };
