
    let inputField = document.getElementById("text-input");
    let button = document.getElementById("check-btn");
    let result = document.getElementById("result");
    function emptyFieldChecker() {
      if (inputField.value === '') {
        alert('Please input a value');
      }
      else {
        palindrome();
      }
    }
    button.addEventListener("click", emptyFieldChecker);

    function palindrome() {

      // get the original input
      let originalInput = inputField.value;

      // Clean the Input from non-alphanumeric
      let cleanInput = originalInput.replace(/[^a-zA-Z0-9]/g, '');
      cleanInput = cleanInput.toLowerCase();

      // convert input string to Array
      let InputArray = cleanInput.split("");

      // reverse the array then convert to string
      let reverseTheInput = InputArray.reverse().join('');

      if (cleanInput === reverseTheInput) {
        result.textContent = `${originalInput} is a palindrome`;
        inputField.value = '';
        result.classList.add("palindrome", "visible");
        result.classList.remove("not-palindrome");
      }
      else {
        result.textContent = `${originalInput} is not a palindrome`;
        inputField.value = '';
        result.classList.add("not-palindrome", "visible");
        result.classList.remove("palindrome");
      }
    }
inputField.addEventListener('keydown', cleanInputField);
function cleanInputField(e){
  if(e.key === 'Enter'){
    emptyFieldChecker();
  }
}
