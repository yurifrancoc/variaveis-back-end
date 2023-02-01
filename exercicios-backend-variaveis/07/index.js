let Po = 1000; //população inicial
let x = 4; // taxa de transmissão/pessoa
let t = 7; //tempo em dias
let P; // população final infectada

P = Po * x ** (7 / 7);

console.log(`Ao final de 7 dias, ${P} é o número de pessoas infectadas`);