
function validacioncampos() {

    var nombre = document.getElementById("name").value;
    var tipom = document.getElementById("type").value;
    var mensaje = "";

    /*if(tipom == ""){
        alert("El campo Tipo de mensaje esta vacio");
        document.getElementById("type").focus();
    }

    if (nombre == "") {
        alert("El campo nombre esta vacio");
        document.getElementById("name").focus();
    }*/

    
    if(tipom == "" || nombre == ""){
        if(tipom == ""){
            mensaje += "El campo Tipo de mensaje esta vacio";
        } 
        if (nombre == "") {
            mensaje += "\nEl campo nombre esta vacio";
        }
        alert(mensaje);
    }

}