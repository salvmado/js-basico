// Reto: Hacer un juego de Piedra, papel o tijera. Jugaré contra la máquina.

// 1.- Generar variables: piedra, papel y tijera
// 2.- Generar función donde yo la mande llamar y el parámetro será mi jugada.
// 3.- La función genera la validación.
// 4.- Me regresa como resultado si gané o perdí.

function piedraPapelTijera(miJugada) {

  var piedra = 1;
  var papel =  2;
  var tijera = 3;

  var jugadaDeMaquina = Math.floor(Math.random() * (4 - 1)) + 1;

  if(miJugada === "piedra" && jugadaDeMaquina === 3) {
    return "Ganaste, la máquina jugó tijera";
  } else if (miJugada === "tijera" && jugadaDeMaquina === 2) {
    return "Ganaste, la máquina jugó papel";
  } else if (miJugada === "papel" && jugadaDeMaquina === 1) {
    return "Ganaste, la máquina jugó piedra";
  } else if (miJugada === "piedra" && jugadaDeMaquina === 2) {
    return "Perdiste, la máquina jugó papel";
  } else if (miJugada === "tijera" && jugadaDeMaquina === 1) {
    return "Perdiste, la máquina jugó piedra";
  } else if (miJugada === "papel" && jugadaDeMaquina === 3) {
    return "Perdiste, la máquina jugó tijera";
  } else if (miJugada === "piedra" && jugadaDeMaquina === 1) {
    return "Es un empate, la máquina jugo piedra"
  } else if (miJugada === "papel" && jugadaDeMaquina === 2) {
    return "Es un empate, la máquina jugo papel";
  } else if (miJugada === "tijera" && jugadaDeMaquina === 3) {
    return "Es un empate, la máquina jugo tijera";
  } else {
    return "Juega con un valor válido, el programa distingue entre mayúsculas y minúsculas.";
  }
}

piedraPapelTijera("piedra");
// Resultado de ejemplo:
// "Ganaste, la máquina jugó tijera"