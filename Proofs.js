function comprobar() {
    const claveCorrecta = "T3cHN0dIscoVerm3nt";
    const nombreEspecial = "matthew"; // Lo ponemos en minúsculas para comparar mejor
    
    // Obtenemos el valor, quitamos espacios y lo pasamos a minúsculas solo para la comparación especial
    const intentoOriginal = input.value.trim();
    const intentoMinusculas = intentoOriginal.toLowerCase();

    // Limpiamos el estado visual antes de validar
    errorMsg.style.display = "none";
    errorMsg.style.color = "red"; 

    if (intentoOriginal === claveCorrecta) {
        // ÉXITO: Redirección
        window.location.href = "Secrets.HTML";
    } 
    else if (intentoMinusculas === nombreEspecial) {
        // CASO ARG: Matthew
        console.log("Detectado nombre especial: Matthew");
        errorMsg.innerText = "I don't want to talk about him"; // Usamos innerText para asegurar el cambio
        errorMsg.style.color = "orange"; // Color de advertencia narrativa
        errorMsg.style.display = "block";
        input.value = ""; 
    } 
    else {
        // ERROR ESTÁNDAR
        errorMsg.innerText = "Incorrect Password";
        errorMsg.style.display = "block";
        input.value = "";
    }
    
    input.focus();
}