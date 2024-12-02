
/* document.querySelector("html").addEventListener("click", () => {
    alert("Ouch! Stop poking me!");
  }); */
  
const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/wonton.png") {
      myImage.setAttribute("src", "images/wonton-stretch.png");
    } else {
      myImage.setAttribute("src", "images/wonton.png");
    }
  };

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Wonton is a cutie, ${myName}`;
  }
 
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Wonton is a cutie, ${storedName}`;
  }  

myButton.onclick = () => {
    setUserName();
  };  
  