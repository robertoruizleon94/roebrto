function mostrar() {
    var nombre;
    var edad;
    var sexo;
    var estadoCivil;
    var seguir;

    do {
        nombre = prompt(" ingrese su nombre: ");

        edad = parseInt(prompt("ingrese la edad: "));
        while (edad => 18 && isNaN(edad)) {
            edad = prompt("no es mayor de edad. ingrese edad:")
        }

        sexo = prompt("ingrese sexo: ");
        while (sexo != 'f' && sexo != 'm') {
            sexo = prompt("no es valido. ingrese sexo: ")
        }

        estadoCivil = prompt("ingrese su estado civil: ");
        while (estadoCivil != 'soltero' && estadoCivil != 'casado' && estadoCivil != 'viudo') {
            estadoCivil = prompt("estado civil no valido. ingrese su estado civil: ");
        }



        prompt("otro pasajero?: ");
    }
    while (seguir == 's');



}