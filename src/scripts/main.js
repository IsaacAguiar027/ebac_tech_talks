// Inicialização do AOS (Animate On Scroll)
AOS.init();

// Configuração do contador regressivo

const dataDoEvento = new Date("Feb 17, 2026 13:00:00");
const timeTempDoEvento = dataDoEvento.getTime(); 

const contaAsHoras = setInterval(function() {
    const dataAtual = new Date();
    const timestempAtual = dataAtual.getTime();

    const distancia = timeTempDoEvento - timestempAtual;

    distancia / (1000 * 60 * 60 * 24);
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById("contador").innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}, 1000);