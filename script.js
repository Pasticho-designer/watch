window.addEventListener("load", tiempo)

function tiempo() {
    let date = new Date();
    let dia = date.getDay();
    let hora = date.getHours();
    let minutos = date.getMinutes();
    let horario = hora <= 12 ? 'AM' : 'PM';
    let Dias = ["SUN","TUE","WEN","THU","FRI","SAT"];


    hora = hora < 10 ? '0' + hora : hora;
    minutos = minutos < 10 ? '0' + minutos : minutos;

    document.getElementById("dia").innerHTML = Dias[dia];
    document.getElementById("hora").innerHTML = hora;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("horario").innerHTML = horario;

    setTimeout(tiempo, 1000);
}