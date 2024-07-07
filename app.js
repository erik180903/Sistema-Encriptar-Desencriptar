function encript(){
    document.getElementById("containerEncriptEmpty").style.display = "none";
    document.getElementById("containerEncript").style.display = "block";
    const texto = document.getElementById('inputText').value;
    const longitud = texto.length;
    const arrTexto = texto.split('');
    const arrEncriptado = new Array(longitud * 2);
    console.log('Encriptando...');
    console.log(texto);
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (let i = 0; i < arrTexto.length; i++) {
        const rdm = Math.floor(Math.random() * alphabet.length);
        arrEncriptado[2*i] = arrTexto[i].toLowerCase();
        arrEncriptado[2*i + 1] = alphabet[rdm];
    }
    document.getElementById('outputText').value = arrEncriptado.join('');
    console.log(arrEncriptado.join(''));
    document.getElementById('inputText').value = "";
}
function decript(){
    document.getElementById("containerEncriptEmpty").style.display = "none";
    document.getElementById("containerEncript").style.display = "block";
    const texto = document.getElementById('inputText').value;
    const longitud = texto.length;
    const arrTexto = texto.split('');
    const arrDesencriptado = new Array(longitud / 2);
    console.log('Desencriptando...');
    console.log(texto);
    for (let i = 0; i < arrTexto.length; i++) {
        arrDesencriptado[i] = arrTexto[2*i];
    }
    document.getElementById('outputText').value = arrDesencriptado.join('');
    console.log(arrDesencriptado.join(''));
    document.getElementById('inputText').value = "";

}
function copyText() {
    var outputText = document.getElementById("outputText");
    outputText.select();
    outputText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Texto copiado");
}