function numeros(cadena){
    let expresion = new RegExp('^[0-9]*$');
    if(cadena != ""){
        if(expresion.test(cadena)){
            document.getElementById("resultado").innerHTML = "La cadena <strong>" + cadena +  "</strong> es completamente numérica.";
        } else {
            document.getElementById("resultado").innerHTML = "La cadena <strong>" + cadena +  "</strong> no es completamente numérica.";
        }
    } 
}

function letras(cadena){
    let expresion = new RegExp('^[a-zA-ZÀ-ú]*$');
    if(cadena != ""){
        if(expresion.test(cadena)){
            document.getElementById("resultado").innerHTML = "La cadena <strong>" + cadena +  "</strong> solo contiene letras.";
        } else {
            document.getElementById("resultado").innerHTML = "La cadena <strong>" + cadena +  "</strong> no solo contiene letras.";
        }
    } 
}

function letrasEspacio(cadena){
    let expresion = new RegExp('^[a-zA-ZÀ-ú\\s]*$');
    if(cadena != ""){
        if(expresion.test(cadena)){
            document.getElementById("resultado").innerHTML = "La cadena <strong>" + cadena +  "</strong> solo contiene palabras.";
        } else {
            document.getElementById("resultado").innerHTML = "La cadena <strong>" + cadena +  "</strong> no solo contiene palabras.";
        }
    }    
}

function nombreApellido(cadena){
    let expresion = new RegExp('^[a-zA-ZÀ-ú\\s\']*$');
    if(cadena != ""){
        if(expresion.test(cadena)){
            document.getElementById("resultado").innerHTML = "La cadena <strong>" + cadena +  "</strong> cumple los parámetros.";
        } else {
            document.getElementById("resultado").innerHTML = "La cadena <strong>" + cadena +  "</strong> no cumple los parámetros.";
        }
    } 
}

function precio(cadena){
    let expresion = new RegExp('[0-9][.]{1}[0-9]{2}$');
    if(cadena != ""){
        if(expresion.test(cadena)){
            document.getElementById("resultado").innerHTML = "La cadena <strong>" + cadena +  "</strong> cumple los parámetros.";
        } else {
            document.getElementById("resultado").innerHTML = "La cadena <strong>" + cadena +  "</strong> no cumple los parámetros.";
        }
    }    
}

function numerosEnterosYDecimales(cadena){
    let expresion = new RegExp('^[0-9]*$');
    let expresionDec = new RegExp('^[0-9][,.][0-9]');
    if(cadena != ""){
        if(expresion.test(cadena) || expresionDec.test(cadena)){
            document.getElementById("resultado").innerHTML = "La cadena <strong>" + cadena +  "</strong> es entera o decimal.";
        } else {
            document.getElementById("resultado").innerHTML = "La cadena <strong>" + cadena +  "</strong> no es entera o decimal.";
        }
    } 
}

function numerosPositivosNegativos(cadena){
    let expresion = new RegExp('^[0-9]*$');
    let expresionNeg = new RegExp('^[-]{1}[0-9]*$');
    if(cadena != ""){
        if(expresion.test(cadena) || expresionNeg.test(cadena)){
            document.getElementById("resultado").innerHTML = "La cadena <strong>" + cadena +  "</strong> es positivo o negativo.";
        } else {
            document.getElementById("resultado").innerHTML = "La cadena <strong>" + cadena +  "</strong> no es positivo o negativo.";
        }
    } 
}

function milesYDecimales(cadena){
    let expresion = new RegExp('^([0-9]{3}[,]{1})*[.]{1}[0-9]{2}$');
    if(cadena != ""){
        if(expresion.test(cadena)){
            document.getElementById("resultado").innerHTML = "La cadena <strong>" + cadena +  "</strong> es válida.";
        } else {
            document.getElementById("resultado").innerHTML = "La cadena <strong>" + cadena +  "</strong> no es válida.";
        }
    } 
}

function fecha(cadena){
    let expresion = new RegExp('^$');
    if(cadena != ""){
        if(expresion.test(cadena)){
            document.getElementById("resultado").innerHTML = "La cadena <strong>" + cadena +  "</strong> es válida.";
        } else {
            document.getElementById("resultado").innerHTML = "La cadena <strong>" + cadena +  "</strong> no es válida.";
        }
    } 
}
function horaF12h(cadena){
    let expresion = new RegExp('^[0-1]{0,1}[0-9]{1}[aApP]{1}[mM]{1}$');
    if(cadena != ""){
        if(expresion.test(cadena)){
            document.getElementById("resultado").innerHTML = "La cadena <strong>" + cadena +  "</strong> es válida.";
        } else {
            document.getElementById("resultado").innerHTML = "La cadena <strong>" + cadena +  "</strong> no es válida.";
        }
    } 
}

function horaF24h(cadena){
    let expresion = new RegExp('^[0-2]{0,1}[0-9]{1}$');
    if(cadena != ""){
        if(expresion.test(cadena)){
            document.getElementById("resultado").innerHTML = "La cadena <strong>" + cadena +  "</strong> es válida.";
        } else {
            document.getElementById("resultado").innerHTML = "La cadena <strong>" + cadena +  "</strong> no es válida.";
        }
    } 
}

function nombreUsuario(cadena){
    let expresion = new RegExp('([a-z][0-9][-][_]){3,16}');
    if(cadena != ""){
        if(expresion.test(cadena)){
            document.getElementById("resultado").innerHTML = "La cadena <strong>" + cadena +  "</strong> es válida.";
        } else {
            document.getElementById("resultado").innerHTML = "La cadena <strong>" + cadena +  "</strong> no es válida.";
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
        }
    }
})