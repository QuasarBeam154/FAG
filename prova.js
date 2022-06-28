// A empresa de riacho&C confecciona casacos de çã, e todo o ano recebe inumeros pedidos de casacos tamanho
// P, M, G,
/**
 * para cada casaco P são necessarios 3972 metros de fio de lã
 * para cada casaco M são necessarios 7920 metros de fio de lã
 * para cada casaco G sao necessarios 9986 metros de fio de lã
 * para cada casaco P que é confeccionado existe uma perca de 3,3% de fio de lã
 * para cada casaco M que é confeccionado existe uma perca de 4,25% de fio de lã
 * para cada casaco G que é confeccionado existe uma perca de 42000 centimetros/ 420 de fio de lã
 * com base nesses dados, a a empresa recebeu um pedido com N unidades de cada casaco,(N é o valor dado pelo user)
 * O proprietario da empresa solicita que a aplicação lhe mostre os seguintes resultados
 * quando ele escolher a letra de cada alternativa mostre somente:
 *
 * a) qual o percentual de perca do casaco G ao final do pedido em questão
 * b) quanto em quilometros de fio de lã são perdidos na confecção do casaco M, no pedido em questão
 * c) quanto em quilometros de fio no total são utilizados no pedido em questão?
 * d) quanto em quilometros de fio é perdido na confecção do casaco P e G, no pedido em questão
 *
 * @éNecessarioTratar Para que se o usuário informe algo diferente das alternativas a aplicação mostre que:
 * a alternativa/opção não existe
 *
 *
 * g = 4,20% de perca
 */

const P = 3972; // metros
const M = 7920; // metros
const G = 9986; // metros
const percaP = 3.3;
const percaM = 4.25;
const percaG = 42000; // centímetros 

function letraA() {
  let percaPorcentoG = (percaG / G).toFixed(3); // = 4,2%
  let result = (qtdCasaco * G) * (-percaPorcentoG); 
  alert(`${percaPorcentoG} + ${result}`);
};

function letraB() {}
function letraC() {}
function letraD() {}
function main() {
  qtdCasaco = parseInt(prompt("Informe a quantidade de casacos:"));
  funcOption = prompt("Qual alternativa deseja calcular?")[0].toUpperCase();
  if (funcOption == "A") {
    alert("Você escolheu A");
    letraA();
  } else if (funcOption == "B") {
    alert("Você escolheu B");
    letraB();
  } else if (funcOption == "C") {
    alert("Você escolheu C");
    letraC();
  } else if (funcOption == "D") {
    alert("Você escolheu D");
    letraD();
  } else {
    alert("Opção inválida!");
    main();
  }
}
main();
