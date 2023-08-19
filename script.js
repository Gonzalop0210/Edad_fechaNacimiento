const calendario = document.querySelector("#id_calendar");
const boton = document.querySelector("#id_botonEdad");
const mostrar = document.querySelector(".background_respuesta");
const equis = document.querySelector('.fa-x-twitter');

function obtenerDiasEnMes(mes, año) {
    mes = mes - 1;
    var fecha = new Date(año, mes + 1, 0);
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

equis.addEventListener('click', function() {
    mostrar.classList.add("ocultar");
    location.reload();
});