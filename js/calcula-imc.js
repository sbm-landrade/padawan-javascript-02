//document query selector
var titulo = (document.querySelector('.titulo'));
titulo.textContent = 'Lucas Nutricionista';
////document query selector all
var pacientes = (document.querySelectorAll('.paciente'));
for (var contador = 0;contador < pacientes.length; contador++) {
    //console.log(pacientes[contador]);

    var paciente = pacientes[contador];
    //seleciona peso
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    //seleciona altura
    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;
    //calcula imc e altera classe imc
    var tdImc = paciente.querySelector('.info-imc');

    var pesoValido = peso <= 1000;
    var alturaValida = altura >= 0 && altura <= 2.00;

    if (!pesoValido){
        console.log("Peso inválido");
        pesoValido = false;
        tdImc.textContent = 'Peso Inválido!';
        paciente.classList.add("paciente-invalido");
    }
    if (!alturaValida){
        console.log("Altura inválida");
        alturaValida = false;
        tdImc.textContent = 'Altura Inválido!';
        paciente.classList.add("paciente-invalido");
    }

    if (alturaValida && pesoValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;  
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}

function validaPeso(peso) {
    if (peso >= 0 && peso < 1000) {
     return true; 
    }else{
     return false;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}