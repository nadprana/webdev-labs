const makeBigger = () => {
   var h1 = document.getElementsByTagName("h1")[0];
   var size = parseFloat(window.getComputedStyle(h1, null).getPropertyValue('font-size'));
   h1.style.fontSize = (size + 2) + 'px';

   var content = document.getElementsByClassName("content")[0];
   var size = parseFloat(window.getComputedStyle(content, null).getPropertyValue('font-size'));
   content.style.fontSize = (size + 2) + 'px';
};

const makeSmaller = () => {
   var h1 = document.getElementsByTagName("h1")[0];
   var size = parseFloat(window.getComputedStyle(h1, null).getPropertyValue('font-size'));
   h1.style.fontSize = (size - 2) + 'px';

   var content = document.getElementsByClassName("content")[0];
   var size = parseFloat(window.getComputedStyle(content, null).getPropertyValue('font-size'));
   content.style.fontSize = (size - 2) + 'px';
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

