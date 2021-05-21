let custoProduto = 90;
let valorVenda = 160;

let custoTotal = [custoProduto + ((20*custoProduto)/100)];





if(custoProduto!==0 && valorVenda!==0){

  var lucro = (valorVenda-custoTotal)

console.log(lucro*1000);
}else if(custoProduto==0){
  console.log("Erro");
}else if(valorVenda==0){
  console.log("Erro");
}