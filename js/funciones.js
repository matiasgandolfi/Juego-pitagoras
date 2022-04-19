// Generar un numerar aleatorio
let getRandomNumber = size => {
  //Math.floor = Redondea un numero decimal
  //Math.random = Devuelve un numero decimal aleatrio

  return Math.floor(Math.random() * size);
}

//Pitagoras
let getDistance = (e, target) => {
  let diffX = e.offsetX - target.x;
  let diffY = e.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

//Devolver la distancia
let getDistanceHint = distance => {
  if (distance < 30) {
    return "Muy calinte";
  } else if (distance < 40) {
    return "Realmente caliente";
  } else if (distance < 60) {
    return "Caliente";
  } else if (distance < 100) {
    return "Tibio";
  } else if (distance < 180) {
    return "Frio";
  } else if (distance < 360) {
    return "Realmente Frio";
  } else {
    return "Congelado";
  }
}
