

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
// function normalCal (){
//   document.getElementById("outer-div").style.display="block"
//   document.getElementById("outer-div-2").style.diplay="none"

// }
function sciCal (){
  document.getElementById("outer-div").style.display="none"
  document.getElementById("outer-div-2").style.display="block"
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

    document.getElementById("data").value = "";
}
function del() {
    var inputData = document.getElementById("data")
    var currentValue = inputData.value
    var newValue = currentValue.slice(0, -1)
    inputData.value = newValue
}


    

