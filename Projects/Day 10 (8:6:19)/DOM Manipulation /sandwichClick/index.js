let pb = 0;
let gc = 0;
let rb = 0;


$('#pb').on('click', function() {
  pb++
  console.log(`Peanut Butter Sandwiches Eaten: ${pb}`);
});

$('#gc').on('click', function() {
  gc++
  console.log(`Grilled Cheese Sandwiches Eaten: ${gc}`);
});

$('#rb').on('click', function() {
  rb++
  console.log(`Roast Beef Sandwiches Eaten: ${rb}`);
});