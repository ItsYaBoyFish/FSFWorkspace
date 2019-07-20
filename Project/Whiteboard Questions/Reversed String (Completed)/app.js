const reverseBtn = document.getElementById('reverseBtn');
const stringInput = document.getElementById('stringInput');

function reversedString(str){
  let rvrseString = '';
  for (i = str.length-1; i >= 0; i--) {
    rvrseString += str[i];
  }
  return rvrseString
}

reverseBtn.addEventListener('click', () => {
  let answer = reversedString(stringInput.value);
  console.log(answer);
  let paragraph = document.getElementById('answerHere');
  paragraph.innerHTML = answer;
});