const ARRAY = [
  'dato 1',
  'dato 2',
  'dato 3'
];

//-- filter --------------------------------------------------------
let arr2 = ARRAY.filter((elem, i) => {
  return Number.parseInt(elem.replace('dato ', ''), 10) < 3
});
console.info(JSON.stringify(arr2));
