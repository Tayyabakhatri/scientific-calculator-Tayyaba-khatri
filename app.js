document.getElementById("on").addEventListener("click", () => {
})
function input(num) {
  var inputValue = num.innerText
  var inputData = document.getElementById("data")
  inputData.value += inputValue
}
function aNS() {
  result()
}
function clear() {
  document.getElementById("data").value = "";
}
function off() {
  document.getElementById("off").addEventListener("click", () => {
    isCalculatorOn = false
    document.getElementById("on").disabled = false
    document.getElementById("off").disabled = true
  })
}
//visible not visible
function sciCal() {
  document.getElementById("outer-div").style.display = "none";
  document.getElementById("outer-div-2").style.display = "block";
}
function normalCal() {
  document.getElementById("outer-div-2").style.display = "none";
  document.getElementById("outer-div").style.display = "block";
}
//speak functionality
function speak(text) {
  if (isReadAloudEnable) {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  }
}

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
    speak(button.textContent);
  });
});

var volumeOnIcon = document.getElementById("volume-on");
var volumeOffIcon = document.getElementById("volume-off");
var volumeOnIcon2 = document.getElementById("volume-on-2")
var volumeOffIcon2 = document.getElementById("volume-off-2")
var isReadAloudEnable = false;

function enableReadAloud() {
  isReadAloudEnable = true;
  console.log("Read-aloud enabled");
}
function disableReadAloud() {
  isReadAloudEnable = false;
  console.log("Read-aloud disabled");
  window.speechSynthesis.cancel(); // Stop any ongoing speech
}
volumeOnIcon.addEventListener("click", () => {
  enableReadAloud();
  volumeOnIcon.style.color = "green";
  volumeOffIcon.style.color = "#67656a";
});
volumeOffIcon.addEventListener("click", () => {
  disableReadAloud();
  volumeOffIcon.style.color = "red";
  volumeOnIcon.style.color = "#67656a";
});
volumeOnIcon2.addEventListener("click", () => {
  enableReadAloud();
  volumeOnIcon2.style.color = "green";
  volumeOffIcon2.style.color = "#67656a";
});
volumeOffIcon2.addEventListener("click", () => {
  disableReadAloud();
  volumeOffIcon2.style.color = "red";
  volumeOnIcon2.style.color = "#67656a";
});
// displaying outputs
function input(num) {  
  var inputValue = num.innerText;
  var inputData = document.getElementById("data");
  
  // Get the current value in the input
  var currentValue = inputData.value;
  
  // Check if the inputValue is an operator
  var isOperator = ['+', '-', '*', '/'].includes(inputValue);
  var lastChar = currentValue.slice(-1);
  console.log(lastChar)
  
  // Only allow operator if last character is not an operator
  if (!(isOperator && ['+', '-', '*', '/'].includes(lastChar))) {
      inputData.value += inputValue;
  }
}

//showing results
function result() {
  var inputData = document.getElementById("data")
  var value = inputData.value
  var result = eval(value)
  inputData.value = result

}
//same 
function aNS() {
  result()
}
//clear all 
function clear() {
  var input = document.getElementById("data")
  input.value = ""
}
//delete funtionality
function del() {
  var inputData = document.getElementById("data")
  var currentValue = inputData.value
  var newValue = currentValue.slice(0, -1)
  inputData.value = newValue
}
//scientific calculator
function sciInput(num) {
  var inputValue = num.innerText
  var inputData = document.getElementById("sci-data")
  inputData.value += inputValue
}

//sin funtionality
function sin() {
  var input = document.getElementById("sci-data")
  var currentValue = input.value
  var newValue = Math.sin(currentValue)
  input.value = newValue
}
//cos functionality
function cos() {
  var input = document.getElementById("sci-data")
  var currentValue = input.value
  var newValue = Math.cos(currentValue)
  input.value = newValue
}
//tan functionality
function tan() {
  var input = document.getElementById("sci-data")
  var currentValue = input.value
  var newValue = Math.tan(currentValue)
  input.value = newValue
}
//log functionality
function log() {
  var input = document.getElementById("sci-data")
  var currentValue = input.value
  var newValue = Math.log(currentValue)
  input.value = newValue
}
//delete
function scidel() {
  var inputData = document.getElementById("sci-data")
  var currentValue = inputData.value
  var newValue = currentValue.slice(0, -1)
  inputData.value = newValue
}
//clear
function clear2() {

  var input = document.getElementById("sci-data")

  input.value = ""
}
//memory functionality
var memory = 0;
function addMemory() {
  var currentValue = parseFloat(document.getElementById("sci-data").value);
  memory += currentValue;
  document.getElementById("sci-data").value = memory;
}

function subMemory() {
  var currentValue = parseFloat(document.getElementById("sci-data").value);
  memory -= currentValue;
  document.getElementById("sci-data").value = memory;
}
function clrMemory() {
  document.getElementById("sci-data").value = "";
  memory = 0;
}

function result2() {
  var inputData = document.getElementById("sci-data")
  var value = inputData.value
  var result = eval(value)
  inputData.value = result

}
function aNS2() {
  result2()
}
function sqrt() {
  var inputData = document.getElementById("sci-data")

  var root = Math.sqrt(inputData.value)
  inputData.value = root
}