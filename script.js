const calendario = document.querySelector("#id_calendar");
const boton = document.querySelector("#id_botonEdad");
const mostrar = document.querySelector(".background_respuesta");

boton.addEventListener("click", function() {
    const fecha = new Date(calendario.value);
    const dia = fecha.getDay();
    const mes = fecha.getMonth();
    const anio = fecha.getFullYear();

    console.log(dia);
    console.log(mes);
    console.log(anio);
});