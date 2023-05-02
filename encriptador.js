function encriptar(){
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let panda = document.getElementById("panda");

  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

    if(texto.length != 0 ){
       document.getElementById("texto").value = textoCifrado;
       tituloMensaje.textContent = "Texto encriptado con exito";
       parrafo.textContent = "";
       panda.src = "./img/oso-panda-v2.png";
    } 
    
    else{
      panda.src = "./img/oso-panda-v2.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado"
      parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar";
      alert("Debes ingresar algún texto");
    }


}


//function llaves() {
   
  //  var e = "enter"
  //  var i = "imes"
  //  var a = "ai"
  //  var o = "ober"
  //  var u = "ufat"
    
//}


