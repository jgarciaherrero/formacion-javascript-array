const ARRAY = [
  'dato 1',
  'dato 2',
  'dato 3'
];

let valorInicial = 0;
let resul = ARRAY.reduce((acc, elem) => {
  return acc + Number.parseInt(elem.replace('dato ', ''), 10)
}, valorInicial);

console.info(resul);