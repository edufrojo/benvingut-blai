var listArt = articulos;

var contenedor = document.getElementById("lista-articulos");

for (let i = 0; i < listArt.length; i++) {
  if (listArt[i].Reserva == 0) {
    contenedor.innerHTML +=
      '<div class="articulo"><img class="articulo__imagen" src="' +
      listArt[i].Imagen +
      '" alt="" /><h3 class="articulo__titulo">' +
      listArt[i].Nombre +
      '</h3><div class="articulo__precio"><span>' +
      listArt[i].Precio +
      "</span></div></div>";
  } else {
    contenedor.innerHTML +=
      '<div class="articulo"><div class="articulo__reserva">RESERVAT!</div><img class="articulo__imagen" src="' +
      listArt[i].Imagen +
      '" alt="" /><h3 class="articulo__titulo">' +
      listArt[i].Nombre +
      "</h3><div class='articulo__precio'><i class='em em-heart_eyes' aria-role='presentation' aria-label='SMILING FACE WITH HEART-SHAPED EYES'></i></div></div>";
  }
}
