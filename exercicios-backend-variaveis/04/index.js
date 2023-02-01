let M;
let C = 1000;
let i = 12.5 / 100;
let t = 5;

M = C * (1 + i) ** t;

console.log(`O montante após 5 meses é de ${M.toFixed(0)}`);