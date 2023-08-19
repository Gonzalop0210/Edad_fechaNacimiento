const calendario = document.querySelector("#id_calendar");
const boton = document.querySelector("#id_botonEdad");
const mostrar = document.querySelector(".background_respuesta");

function obtenerDiasEnMes(mes, año) {
    // Ten en cuenta que los meses en JavaScript van de 0 a 11, donde 0 es enero y 11 es diciembre.
    // Por lo tanto, debes restar 1 al mes proporcionado.
    mes = mes - 1;

    // Crea una nueva instancia de Date con el día 0 del mes siguiente.
    // Esto significa que estás en el último día del mes actual.
    var fecha = new Date(año, mes + 1, 0);

    // El método getDate() te dará el último día del mes, que es igual al total de días en el mes.
    return fecha.getDate();
}

boton.addEventListener("click", function () {
    /* Obteniendo la fecha por separado */
    const fecha = new Date(calendario.value);
    const dia = fecha.getDate() + 1;
    const mes = fecha.getMonth() + 1;
    const anio = fecha.getFullYear();
    /* Fecha Actual */
    let fechaActual = new Date()/* .getFullYear() */;

    let diferenciaDias = fechaActual.getDate() - dia;
    let diferenciaMeses = (fechaActual.getMonth() + 1) - mes;
    let diferenciaAnios = fechaActual.getFullYear() - anio;

    if (diferenciaDias < 0) {
        diferenciaMeses--;
        diferenciaDias = diferenciaDias + obtenerDiasEnMes(mes, anio);
    }

    if (diferenciaMeses < 0) {
        diferenciaAnios--;
        diferenciaMeses += 12;
    }

    mostrar.classList.remove("ocultar");
    const edad = document.querySelector('.edad');
    const icon = document.querySelector('.icon');

    if (diferenciaAnios >= 0 && diferenciaAnios <= 15) {
        edad.textContent = "Tienes " + diferenciaAnios + " años";
        icon.classList.add('fa-solid');
        icon.classList.add('fa-baby');
    } else if (diferenciaAnios >= 16 && diferenciaAnios <= 40) {
        edad.textContent = "Tienes " + diferenciaAnios + " años";
        icon.classList.add('fa-solid');
        icon.classList.add('fa-child');
    } else if (diferenciaAnios >= 41 && diferenciaAnios <= 120) {
        edad.textContent = "Tienes " + diferenciaAnios + " años";
        icon.classList.add('fa-solid');
        icon.classList.add('fa-person-cane');
    } else {
        edad.textContent = "Ya no eres un ser viviente";
        icon.classList.add("fa-regular");
        icon.classList.add("fa-face-sad-tear");
    }
});