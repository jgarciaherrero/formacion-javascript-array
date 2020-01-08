const ARRAY = [
  'dato 1',
  'dato 2',
  'dato 3'
];

let arr2 = ARRAY.map((elem, i) => {
  return elem + ' - pos ' + i;
});

console.info(JSON.stringify(arr2));
