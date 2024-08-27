/*  #oraclenexteducation
    Primer Challenge ONE
    Challenge Encriptador de texto
    Participante: Osmar Aram Reyes Muñoz
*/

//Declaración de variables y asignación de inicial
const textArea = document.querySelector(".area-texto");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(stringEncriptado) {
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a", "ai"],["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],
                matrizCodigo[i][1])
        }
    }
    return stringEncriptado
}

function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a", "ai"],["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],
                matrizCodigo[i][0])
        }
    }
    return stringDesencriptado
}


//Función para enviar mensaje de error en caso de no cumplir con requisito de ingreso de texto.
function mensajeDeError(mensaje) {
    const error = document.querySelector('#error');
    error.textContent = mensaje;
    error.style.display = 'block';
    setTimeout(() => {
        error.style.display = 'none';
    }, 3000);
}

//Función para copiar la cadena de texto encriptada 
function btnCopiar(){
    document.getElementById("textarea2").select()
            document.execCommand ("copy");
}