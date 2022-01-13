// Reto: Hacer un juego de Piedra, papel o tijera. Jugaré contra la máquina.

// 1.- Generar variables: piedra, papel y tijera
// 2.- Generar función donde yo la mande llamar y el parámetro será mi jugada.
// 3.- La función genera la validación.
// 4.- Me regresa como resultado si gané o perdí.

/* --------------------------------------------------------------------------- */


function piedraPapelTijera(miJugada) {

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
    return "Juega con un argumento válido: 'piedra', 'papel' o 'tijera'.";
  }
}

piedraPapelTijera("piedra");
// Resultado de ejemplo:
// "Ganaste, la máquina jugó tijera"


/* --------------------------------------------------------------------------- */


function piedraPapelTijera(miManoEnFormaDe) {

  var juego = ["piedra", "papel", "tijera"];
  var maquinaJuega = juego[Math.floor(Math.random() * (3 - 0)) + 0];

  if (
    maquinaJuega === "piedra" && miManoEnFormaDe === "tijera" ||
    maquinaJuega === "papel" && miManoEnFormaDe === "piedra" ||
    maquinaJuega === "tijera" && miManoEnFormaDe === "papel"
  ) {
    return `¡Perdiste! La máquina ganó porque jugó: ${maquinaJuega}`;
  } else if (
    miManoEnFormaDe === "papel" && maquinaJuega === "piedra" ||
    miManoEnFormaDe === "tijera" && maquinaJuega === "papel" ||
    miManoEnFormaDe === "piedra" && maquinaJuega === "tijera"
  ) {
    return `¡Ganaste! La máquina jugó ${maquinaJuega}!`;
  } else if (
    miManoEnFormaDe === "piedra" && maquinaJuega === "piedra" ||
    miManoEnFormaDe === "papel" && maquinaJuega === "papel" ||
    miManoEnFormaDe === "tijera" && maquinaJuega === "tijera"
  ) {
    return `Es un empate, la máquina jugó: ${maquinaJuega}`;
  } else {
    return "introduce un argumento válido: 'piedra', 'papel' o 'tijera'."
  }
}

piedraPapelTijera("tijera"); 
// Resultado de ejemplo:
// ¡Ganaste! La máquina jugó papel 