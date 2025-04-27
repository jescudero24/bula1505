function abrirModal() {
    document.getElementById('miModal').style.display = 'block';
    document.getElementById('contenidoModal').src = '../bula.html';
  }
  
  function cerrarModal() {
    document.getElementById('miModal').style.display = 'none';
    document.getElementById('contenidoModal').src = ''; // Opcional: limpiar iframe
  }