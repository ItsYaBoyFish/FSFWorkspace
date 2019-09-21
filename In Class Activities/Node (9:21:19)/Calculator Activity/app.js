console.log('test');
console.log(process.argv);
if (process.argv[2] === 'add') {

  console.log('Method: Addition');
  console.log(parseInt(process.argv[3]) + parseInt(process.argv[4]));

} else if (process.argv[2] === 'subtract') {

  console.log('Method: Subtraction');
  console.log(parseInt(process.argv[3] - parseInt(process.argv[4])));

} else if (process.argv[2] === 'multiply') {

  console.log('Method: Multiplication');
  console.log(parseInt(process.argv[3] * parseInt(process.argv[4])));

} else if (process.argv[2] === 'remainder') {
  console.log('Method: Remainder');
  console.log(parseInt(process.argv[3] % parseInt(process.argv[4])));

} else if (process.argv[2] === 'divide') {

  console.log('Method: Division');
  console.log(parseInt(process.argv[3] / parseInt(process.argv[4])));

} else if (process.argv[2] === 'exp') {

  console.log('Method: Exponents');
  console.log(Math.pow(process.argv[3], process.argv[4]));

} else if (process.argv[2] === 'algebra') {

  console.log('Method: Algebra');
  var a = parseInt(process.argv[3]);
  var b = parseInt(process.argv[5]);
  var c = parseInt(process.argv[7]);

  console.log((c - b)/a);
}