/*
e --->enter 
o --->ober 
i --->imes 
a --->ai 
u --->ufat
*/

function encriptar(){
    var texto = document.getElementById("texto_a_encriptar").value.toLowerCase();
    
    var txtCifrado = texto.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

    document.getElementById("imagen_muñeco").style.display = "none";
    document.getElementById("texto_imagen").style.display = "none";
    document.getElementById("texto_imagen2").style.display = "none";
    document.getElementById("texto_resultado").style.display = "show";
    document.getElementById("texto_resultado").innerHTML = txtCifrado;    
    document.getElementById("texto_resultado").style.display = "inherit";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar(){
    var texto = document.getElementById("texto_a_encriptar").value.toLowerCase();

    var txtCifrado = texto.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");

    document.getElementById("imagen_muñeco").style.display = "none";
    document.getElementById("texto_imagen").style.display = "none";
    document.getElementById("texto_resultado").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copiar(){
    var contenido = document.querySelector("texto_resultado");
    contenido.ariaSelected();
    document.execCommand("copy");
    alert("Se copió!")
}


/*function copiar2(){
    var contenido = document.getElementById("texto_resultado");
    var selecciones = document.createRange;
    selecciones.selectNodeContents(contenido);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(selecciones);
    var res = document.execCommand("copy");
    alert("Se copió!")
}*/

/*function copiar(){
    var text = document.getElementsById("texto_resultado")[0].textContent;
    navigator.clipboard.writeText(text);
    inputTextElement.value = "";
  }*/

  /*function copiar(){
    let copyText = document.querySelector("#texto_resultado");
    copyText.select();
    document.execCommand("copy");
}

document.querySelector("#copiar").addEventListener("click", copy);*/