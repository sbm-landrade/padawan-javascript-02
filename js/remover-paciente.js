var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function() {
        console.log(" Fui cliclado com um duplo click");
        this.remove();//ele não remove novos pacientes
    });
});
