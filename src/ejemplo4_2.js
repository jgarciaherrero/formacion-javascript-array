const ARRAY = [
  'dato 1',
  'dato 2',
  'dato 3'
];

//-- find ----------------------------------------------------------
let elem = ARRAY.find((elem, i) => {
    return elem === 'dato 2'
});
console.info(elem);
