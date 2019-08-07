$(document).ready(function() {

$('#button').on('click', function() {
  let genNumber = Math.floor(Math.random() * 1000) + 1;
  console.log(genNumber);
  //alert(`Random Number Generated Is: ${genNumber}`)
  let number = $('#number');
  number.text(genNumber);
});
  
})