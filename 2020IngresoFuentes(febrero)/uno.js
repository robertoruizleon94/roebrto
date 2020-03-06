function mostrar() {
    var tipoProd;
    var precioProd;
    var cantProd;
    var i = 0;

    for (i = 0; i < 5; i++) {
        tipoProd = prompt("producto: ");
        while (tipoProd == 'camisolin' || tipoProd == 'guantes' || tipoProd == 'barbijos' ||
            tipoProd == 'alcohol' || tipoProd == 'jabon') {
            promp = ("no es valido. ingrse producto: ")
        }
        precioProd = parseInt(prompt("precio del producto: "));
        while (precioProd >= 100 && precioProd <= 300) {
            prompt("precio no valido. ingrese precio del producto: ")
        }
        cantProd = parseInt(prompt("cantidad del producto: "));
        while (cantProd >= 0 && cantProd <= 1000) {
            prompt("no es valido. ingrese cantidad del producto: ")
        }


    }
}