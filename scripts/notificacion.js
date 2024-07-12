const notificar = (mensaje, notificacion) => {
    Toastify({
        text: mensaje,
        duration: 3000,
        close: true,
        style : {
            background: notificacion == "error" ? "#ff0000" : "#008000",
            borderRadius: "25px",
            fontFamily: "Roboto, sans-serif"
        }
    }).showToast();
}