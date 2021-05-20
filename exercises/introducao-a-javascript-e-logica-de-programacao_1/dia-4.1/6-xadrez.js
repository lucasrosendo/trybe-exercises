let peca= "";

switch (peca) {
  case "Peão":
    console.log("Movimento: Anda uma casa para frente")
    break;
  case "Torre":("Movimento: Anda na horizontal e vertical")
    break; 
  case "Cavalo":
    console.log("Movimento: Anda formando movimentos em L")
    break;
  case "Bispo":
    console.log("Movimento: Anda na diagonal")
    break;
  case "Rei":
    console.log("Movimento: Pode andar uma casa para qualquer lado")
    break;
  case "Rainha":
    console.log("Movimento: Anda quantas casas quiser para todos lados")
    break;

  default:
    console.log("Peça inválida");
}