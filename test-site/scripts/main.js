let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/fire-fox.jpg') {
      myImage.setAttribute('src', 'images/fire-fox2.jpg');
    } else {
      myImage.setAttribute('src', 'images/fire-fox.jpg');
    }
    
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name1', myName);
      myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
    }
  }
  if(!localStorage.getItem('name1')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name1');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
 }