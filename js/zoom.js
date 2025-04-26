let zoomLevel = 1;

function zoomIn() {
  zoomLevel += 0.1;
  applyZoom();
}

function zoomOut() {
  zoomLevel = Math.max(0.1, zoomLevel - 0.1);
  applyZoom();
}

function resetZoom() {
  zoomLevel = 1;
  applyZoom();
}

function applyZoom() {
  document.getElementById('img-wrapper').style.transform = `scale(${zoomLevel})`;
}