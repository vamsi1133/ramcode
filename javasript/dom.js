const rootElement = document.getElementById("root");
const btnElement = document.getElementById("btn");
const classElement = document.getElementsByClassName("myclass");

rootElement.innerHTML = "Hello";
classElement[0].innerHTML = "there";
rootElement.style.color = "red";
rootElement.className = "vamsi";

const changeColor = (element, color) => {
  element.style.color = color;
};

btnElement.onclick = () => {
  localStorage.setItem("user", "ram");
  sessionStorage.setItem("user2", "vamsi");
};

console.log(rootElement);
console.log(classElement);

const formElement = document.getElementById("myform");
const resultElement = document.querySelector("#result");

formElement.addEventListener("change", (event) => {
  const { name, value } = event.target;
  const res = name + ": " + value;
  resultElement.innerHTML = res;
});

resultElement.addEventListener("mouseover", (event) => {
  changeColor(resultElement, "green");
});
resultElement.addEventListener("mouseleave", (event) => {
  changeColor(resultElement, "red");
});

const getWidthAndHeight = () => {
  const h = window.innerHeight;
  const w = window.innerWidth;
  console.log(h, w);
  console.log(window.location.hostname);
  // window.history.back();
};
