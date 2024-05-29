//document query selector
var titulo = (document.querySelector('.titulo'));
titulo.textContent = 'Lucas Nutricionista';
//seleciona id primeiro paciente
var paciente = document.querySelector('#primeiro-paciente');
//seleciona peso
var tdPeso = paciente.querySelector('.info-peso');
var peso = tdPeso.textContent;
//seleciona altura
var tdAltura = paciente.querySelector('.info-altura');
var altura = tdAltura.textContent;
//calcula imc e altera classe imc
var tdImc = paciente.querySelector('.info-imc');

var pesoValido = true;
var alturaValida = true;

    if (peso <= 0 || peso >= 1000){
        console.log("Peso inválido");
        pesoValido = false;
        tdImc.textContent = 'Peso Inválido!';
    }
    if (altura <= 0 || altura >= 3.00 ){
        console.log("Altura inválida");
        pesoValido = false;
        tdImc.textContent = 'Altura Inválido!';
    }

    if (alturaValida && pesoValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc;    
    }