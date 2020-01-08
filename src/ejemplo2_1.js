const ARRAY = [
  'dato 1',
  'dato 2',
  'dato 3'
];

function pintaDato(dato, i) {
  console.info('Dato %s: %s', i, dato);
}

ARRAY.forEach(pintaDato);
