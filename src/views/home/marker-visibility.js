export function hide() {
  let markers = document.getElementsByClassName("mapboxgl-marker");
  for (let i = 0; i < markers.length; i++) {
      markers[i].style.visibility = "hidden";
  }
}

export function show() {
  let markers = document.getElementsByClassName("mapboxgl-marker");
  for (let i = 0; i < markers.length; i++) {
      markers[i].style.visibility = "visible";
  }
}