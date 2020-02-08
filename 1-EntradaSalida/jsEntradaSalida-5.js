/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    var nombre;

    var edad;

    nombre = Document.getElementById("elNombre").value;
    edad = Document.getElementById("laEdad").value;
    alert ("usted se llama" +nombre "y tiene" +edad);
}

