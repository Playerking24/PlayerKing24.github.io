<script>
  // Esta función se asegura de que el código corra sí o sí
  window.onload = function() {
    const input = document.getElementById('passwordInput');
    const boton = document.getElementById('enviarBtn');
    const errorMsg = document.getElementById('mensajeError');

    function comprobar() {
      const clave = "T3cHN0dIscoVerm3nt";
      
      // Limpiamos el mensaje de error cada vez que intentamos
      errorMsg.style.display = "none";

      if (input.value === clave) {
        // Redirección con impulso de velocidad
        window.location.href = "Secrets.HTML";
      } else {
        // Mostrar el texto de "Incorrect Password" en la pantalla
        errorMsg.style.display = "block";
        input.value = ""; // Limpiar la barra
        input.focus();
      }
    }

    // Vinculamos el clic
    boton.onclick = comprobar;

    // Vinculamos la tecla Enter
    input.onkeydown = function(e) {
      if (e.key === "Enter") {
        comprobar();
      }
    };

    console.log("Sistema de seguridad activado y listo.");
  };
</script>