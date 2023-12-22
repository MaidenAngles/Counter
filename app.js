// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count-=10;
    } else if (styles.contains("increase")) {
      count+=10;
      //added a new else if statement with myArray function
    } else if (styles.contains("random")) {
      count+myArray();
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});

//array for function
const array = ["1", "2", "3", "4", "5", "6 ", "7", "8", "9", "10"];

//random number function
function myArray() {
  return Math.floor(Math.random() * array.length);
}