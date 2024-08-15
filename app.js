

// var  isCalculatorOn = false 
// function on(){

//     document.getElementById("on").addEventListener("click",()=>{
//         isCalculatorOn=true
//         document.getElementById("off").disabled=true
//     })
//     function input(num) {
//         var inputValue = num.innerText
//         var inputData = document.getElementById("data")
//         inputData.value += inputValue

//     }
//     function result() {
//         var inputData = document.getElementById("data")
//         var value = inputData.value
//         var result = eval(value)
//         inputData.value = result

//     }

//     function aNS() {
//         result()
//     }


//     function clear() {

//         document.getElementById("data").value = "";
//     }
//     function del() {
//         var inputData = document.getElementById("data")
//         var currentValue = inputData.value
//         var newValue = currentValue.slice(0, -1)
//         inputData.value = newValue
//     }

// }
// function off(){
//     document.getElementById("off").addEventListener("click",()=>{
//         isCalculatorOn=false
//         document.getElementById("on").disabled=false 
//         document.getElementById("off").disabled=true
//     })
// }
function sciCal() {
  document.getElementById("outer-div-2").style.display = "block"
  document.getElementById("outer-div").style.display = "none"
}
function normalCal() {
  document.getElementById("outer-div-2").style.diplay = "none"
  document.getElementById("outer-div").style.display = "block";

}



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


function input(num) {
  var inputValue = num.innerText
  var inputData = document.getElementById("data")
  inputData.value += inputValue

}

function result() {
  var inputData = document.getElementById("data")
  var value = inputData.value
  var result = eval(value)
  inputData.value = result

}

function aNS() {
  result()
}


function clear() {

  var input = document.getElementById("data")

  input.value = ""
}
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
function sin() {
  var input = document.getElementById("sci-data")
  var currentValue = input.value
  var newValue = Math.sin(currentValue)
  input.value = newValue
}
function cos() {
  var input = document.getElementById("sci-data")
  var currentValue = input.value
  var newValue = Math.cos(currentValue)
  input.value = newValue
}
function tan() {
  var input = document.getElementById("sci-data")
  var currentValue = input.value
  var newValue = Math.tan(currentValue)
  input.value = newValue
}
function log() {
  var input = document.getElementById("sci-data")
  var currentValue = input.value
  var newValue = Math.log(currentValue)
  input.value = newValue
}
function scidel() {
  var inputData = document.getElementById("sci-data")
  var currentValue = inputData.value
  var newValue = currentValue.slice(0, -1)
  inputData.value = newValue
}
function clear2() {

  var input = document.getElementById("sci-data")

  input.value = ""
}

var memory = 0;
function addMemory() {
  var currentValue = parseFloat(document.getElementById("sci-data"));
  var val = currentValue.value;
  memory += val;
  currentValue.value = memory;
}
function subMemory() {
  var currentValue = parseFloat(document.getElementById("sci-data"));
  var val = currentValue.value;
  memory -= val;
  val = memory;
}
function clrMemory() {
  memory = 0
}

