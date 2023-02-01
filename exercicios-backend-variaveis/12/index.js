let i;
let M = 90000;
let C = 60000;
let n = 24;

i = (((M / C) ** (1 / n)) - 1) * 100;

console.log(`O seu financiamento de ${C} teve uma taxa de juros de ${i.toFixed(3)} % após ${n} meses você teve que pagar ${M}.`)

