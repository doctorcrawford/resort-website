// User Interface Logic
window.onload = function() {
 let button1 = document.querySelector("button.button1");
 let body = document.querySelector("body");
 let h2 = document.querySelector("h2")
 let p = document.querySelector("p")
 button1.onclick = function() {
  body.style.backgroundColor = "#fefce8";
  h2.style.color = "black";
  p.style.color = "black";
 }

 let button2 = document.querySelector("button.button2");
 button2.onclick = function() {
  body.style.backgroundColor = "#2e2e2e";
  h2.style.color = "white";
  p.style.color = "white";
 }

 let button3 = document.querySelector("button.button3");
 let button4 = document.querySelector("button.button4");
 button3.onclick = function() {
  body.style.fontSize = "16px";
 }

 button4.onclick = function() {
  body.style.fontSize = "22px";
 }

 document.querySelectorAll('.mouse').forEach(item => {
  item.addEventListener('mouseover', event => {
    body.style.backgroundColor = "yellow";
  })
})

 document.querySelectorAll('.mouse').forEach(item => {
  item.addEventListener('mouseout', event => {
    body.style.backgroundColor = "#fefce8";
  })
})
}

// this
// function hummus(input) {
//   console.warn(input);
// }

// is equal to
// const hummus = (input) => console.log(input); 

// function executeAnyFunction(fn, arg1) {
//   if (fn && arg1) {
//     fn(arg1);
//   } else {
//     console.warn("wtf dude, pass shit in")
//   }
// }

// const executeAnyFunction = (fn, arg1) => {
//   fn(arg1);
// }