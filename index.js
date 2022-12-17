function numeros(cadena){
    let expresion = new RegExp('^[0-9]*$');
    if(cadena != ""){
        if(expresion.test(cadena)){
            document.getElementById("resultado").innerHTML = "La cadena <strong> ^[0-9]*$ </strong> concuerda con el texto.";
        } else {
            document.getElementById("resultado").innerHTML = "La cadena  <strong>^[0-9]*$</strong> no concuerda con el texto.";
        }
    } 
}

function letras(cadena){
    let expresion = new RegExp('^[a-zA-ZÀ-ú]*$');
    if(cadena != ""){
        if(expresion.test(cadena)){
            document.getElementById("resultado").innerHTML = "La cadena  <strong>^[a-zA-ZÀ-ú]*$</strong> concuerda con el texto.";
        } else {
            document.getElementById("resultado").innerHTML = "La cadena <strong> ^[a-zA-ZÀ-ú]*$</strong> no concuerda con el texto.";
        }
    } 
}

function letrasEspacio(cadena){
    let expresion = new RegExp('^[a-zA-ZÀ-ú\\s]*$');
    if(cadena != ""){
        if(expresion.test(cadena)){
            document.getElementById("resultado").innerHTML = "La cadena  <strong>^[a-zA-ZÀ-ú\\s]*$</strong> concuerda con el texto.";
        } else {
            document.getElementById("resultado").innerHTML = "La cadena  <strong>^[a-zA-ZÀ-ú\\s]*$</strong> no concuerda con el texto.";
        }
    }    
}

function nombreApellido(cadena){
    let expresion = new RegExp('^[a-zA-ZÀ-ú\\s\']*$');
    if(cadena != ""){
        if(expresion.test(cadena)){
            document.getElementById("resultado").innerHTML = "La cadena  <strong>^[a-zA-ZÀ-ú\\s\']*$</strong> concuerda con el texto.";
        } else {
            document.getElementById("resultado").innerHTML = "La cadena  <strong>^[a-zA-ZÀ-ú\\s\']*$</strong> no concuerda con el texto.";
        }
    } 
}

function precio(cadena){
    let expresion = new RegExp('^[0-9][.]{1}[0-9]{2}$');
    if(cadena != ""){
        if(expresion.test(cadena)){
            document.getElementById("resultado").innerHTML = "La cadena <strong> ^[0-9][.]{1}[0-9]{2}$</strong> concuerda con el texto.";
        } else {
            document.getElementById("resultado").innerHTML = "La cadena  <strong>^[0-9][.]{1}[0-9]{2}$</strong> no concuerda con el texto.";
        }
    }    
}

function numerosEnterosYDecimales(cadena){
    let expresion = new RegExp('^[0-9]*$');
    let expresionDec = new RegExp('^[0-9][,.][0-9]');
    if(cadena != ""){
        if(expresion.test(cadena) || expresionDec.test(cadena)){
            document.getElementById("resultado").innerHTML = "La cadena <strong> ^[0-9]*$ | ^[0-9][,.][0-9]</strong> concuerda con el texto.";
        } else {
            document.getElementById("resultado").innerHTML = "La cadena  <strong>^[0-9]*$ | ^[0-9][,.][0-9] </strong> no concuerda con el texto.";
        }
    } 
}

function numerosPositivosNegativos(cadena){
    let expresion = new RegExp('^[0-9]*$');
    let expresionNeg = new RegExp('^[-]{1}[0-9]*$');
    if(cadena != ""){
        if(expresion.test(cadena) || expresionNeg.test(cadena)){
            document.getElementById("resultado").innerHTML = "La cadena  <strong>^[0-9]*$ | ^[-]{1}[0-9]*$</strong> concuerda con el texto.";
        } else {
            document.getElementById("resultado").innerHTML = "La cadena <strong>^[0-9]*$ | ^[-]{1}[0-9]*$ </strong> no concuerda con el texto.";
        }
    } 
}

function milesYDecimales(cadena){
    let expresion = new RegExp('^[0-9]{1,3}[,]{1}([0-9]{3}[,]{1})*[0-9]{3}[.]{1}[0-9]{1,3}$');
    if(cadena != ""){
        if(expresion.test(cadena)){
            document.getElementById("resultado").innerHTML = "La cadena  <strong>[0-9]{1,3}[,]{1}([0-9]{3}[,]{1})*[0-9]{3}[.]{1}[0-9]{1,3}$</strong> concuerda con el texto.";
        } else {
            document.getElementById("resultado").innerHTML = "La cadena  <strong>[0-9]{1,3}[,]{1}([0-9]{3}[,]{1})*[0-9]{3}[.]{1}[0-9]{1,3}$</strong> no concuerda con el texto.";
        }
    } 
}

function fecha(cadena){
    let expresion = new RegExp('^[0-3]{1}[0-9]{1}[/]{1}[0-1]{1}[0-9]{1}[/]{1}[1-2]{1}[0-9]{3}$');
    if(cadena != ""){
        if(expresion.test(cadena)){
            document.getElementById("resultado").innerHTML = "La cadena  <strong>^[0-3]{1}[0-9]{1}[/]{1}[0-1]{1}[0-9]{1}[/]{1}[1-2]{1}[0-9]{3}$</strong> concuerda con el texto.";
        } else {
            document.getElementById("resultado").innerHTML = "La cadena  <strong>^[0-3]{1}[0-9]{1}[/]{1}[0-1]{1}[0-9]{1}[/]{1}[1-2]{1}[0-9]{3}$</strong> no concuerda con el texto.";
        }
    } 
}
function horaF12h(cadena){
    let expresion = new RegExp('^[0-1]{0,1}[0-9]{1}[aApP]{1}[mM]{1}$');
    if(cadena != ""){
        if(expresion.test(cadena)){
            document.getElementById("resultado").innerHTML = "La cadena  <strong>^[0-1]{0,1}[0-9]{1}[aApP]{1}[mM]{1}$</strong> concuerda con el texto.";
        } else {
            document.getElementById("resultado").innerHTML = "La cadena  <strong>^[0-1]{0,1}[0-9]{1}[aApP]{1}[mM]{1}$</strong> no concuerda con el texto.";
        }
    } 
}

function horaF24h(cadena){
    let expresion = new RegExp('^[0-2]{0,1}[0-9]{1}$');
    if(cadena != ""){
        if(expresion.test(cadena)){
            document.getElementById("resultado").innerHTML = "La cadena  <strong>^[0-2]{0,1}[0-9]{1}$</strong> concuerda con el texto.";
        } else {
            document.getElementById("resultado").innerHTML = "La cadena  <strong>^[0-2]{0,1}[0-9]{1}$</strong> no concuerda con el texto.";
        }
    } 
}

function nombreUsuario(cadena){
    let expresion = new RegExp('[a-z0-9_-]{3,16}');
    if(cadena != ""){
        if(expresion.test(cadena)){
            document.getElementById("resultado").innerHTML = "La cadena <strong> [a-z0-9_-]{3,16}</strong> concuerda con el texto.";
        } else {
            document.getElementById("resultado").innerHTML = "La cadena  <strong>[a-z0-9_-]{3,16}</strong> no concuerda con el texto.";
        }
    }
}
function contrasena(cadena){
    let expresion = new RegExp('((?=.*[a-z])+(?=.*[0-9])+(?=.*[!@#$%^&*\\)\\/(+=._-])+){10,}');
    if(cadena != ""){
        if(expresion.test(cadena)){
            document.getElementById("resultado").innerHTML = "La cadena  <strong>((?=.*[a-z])+(?=.*[0-9])+(?=.*[!@#$%^&*\\)\\/(+=._-])+){10,}</strong> concuerda con el texto.";
        } else {
            document.getElementById("resultado").innerHTML = "La cadena  <strong>((?=.*[a-z])+(?=.*[0-9])+(?=.*[!@#$%^&*\\)\\/(+=._-])+){10,}</strong> no concuerda con el texto.";
        }
    }
}
function email(cadena){
    let expresion = new RegExp('[a-zA-Z][@][a-zA-Z][.]{1}[a-zA-Z]{2,3}');
    if(cadena != ""){
        if(expresion.test(cadena)){
            document.getElementById("resultado").innerHTML = "La cadena  <strong>[a-zA-Z][@][a-zA-Z][.]{1}[a-zA-Z]{2,3}</strong> concuerda con el texto.";
        } else {
            document.getElementById("resultado").innerHTML = "La cadena  <strong>[a-zA-Z][@][a-zA-Z][.]{1}[a-zA-Z]{2,3}</strong> no concuerda con el texto.";
        }
    } 
}

function ipv4(cadena){
    let expresion = new RegExp('^([0-9]{3}[.]{1}){3}[0-9]{3}$');
    if(cadena != ""){
        if(expresion.test(cadena)){
            document.getElementById("resultado").innerHTML = "La cadena  <strong>^([0-9]{3}[.]{1}){3}[0-9]{3}$</strong> concuerda con el texto.";
        } else {
            document.getElementById("resultado").innerHTML = "La cadena  <strong>^([0-9]{3}[.]{1}){3}[0-9]{3}$</strong> no concuerda con el texto.";
        }
    } 
}

function url(cadena){
    let expresion = new RegExp('^[w]{3}[.]{1}[a-zA-Z]*[.]{1}[a-zA-Z]{1,3}$');
    if(cadena != ""){
        if(expresion.test(cadena)){
            document.getElementById("resultado").innerHTML = "La cadena  <strong>^[w]{3}[.]{1}[a-zA-Z]*[.]{1}[a-zA-Z]{1,3}$</strong> concuerda con el texto.";
        } else {
            document.getElementById("resultado").innerHTML = "La cadena  <strong>^[w]{3}[.]{1}[a-zA-Z]*[.]{1}[a-zA-Z]{1,3}$</strong> no concuerda con el texto.";
        }
    } 
}

function colores(cadena){
    let expresion = new RegExp('^[#]{1}[0-9A-F]{6}$');
    if(cadena != ""){
        if(expresion.test(cadena)){
            document.getElementById("resultado").innerHTML = "La cadena  <strong>^[#]{1}[0-9A-F]{6}$</strong> concuerda con el texto.";
        } else {
            document.getElementById("resultado").innerHTML = "La cadena  <strong>^[#]{1}[0-9A-F]{6}$</strong> no concuerda con el texto.";
        }
    } 
}
document.addEventListener("click", e=>{
    if(e.target.id == "confirmar"){
        switch (document.getElementById("opcion").value) {
            case "numeros":
                numeros(document.getElementById("expresion").value);
                break;
            case "letras":
                letras(document.getElementById("expresion").value);
                break;
            case "letrasEspacio":
                letrasEspacio(document.getElementById("expresion").value);
                break;
            case "nombreApellido":
                nombreApellido(document.getElementById("expresion").value);
                break;    
            case "precio":
                precio(document.getElementById("expresion").value);
                break;
            case "enterosYDecimales":
                numerosEnterosYDecimales(document.getElementById("expresion").value);
                break;
            case "positivosYNegativos":
                numerosPositivosNegativos(document.getElementById("expresion").value);
                break;
            case "milesYDecimales":
                milesYDecimales(document.getElementById("expresion").value);
                break;
            case "fecha":
                fecha(document.getElementById("expresion").value);
                break;
            case "horaF12h":
                if(parseInt(document.getElementById("expresion").value) < 13)
                horaF12h(document.getElementById("expresion").value);
                break;
            case "horaF24h":
                if(parseInt(document.getElementById("expresion").value) < 24)
                horaF24h(document.getElementById("expresion").value);
                break;
            case "nombreUsuario":
                nombreUsuario(document.getElementById("expresion").value);
                break;
            case "contrasena":
                contrasena(document.getElementById("expresion").value);
                break;
            case "ipv4":
                ipv4(document.getElementById("expresion").value);
                break;
            case "url":
                url(document.getElementById("expresion").value);
                break;
            case "colores":
                colores(document.getElementById("expresion").value);
                break;
        }
    }
})