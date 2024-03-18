let img = document.querySelector('img');
let imgArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

setInterval(() => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  document.querySelector('body').style.backgroundColor = `rgb(${r} ${g} ${b})`;
}, 100);

document.querySelector('button').onclick = () => {
  let interval = setInterval(() => {
    let x = Math.floor(Math.random() * imgArr.length + 1);
    img.src = `img/${x}.jpg`;
  }, 100);
  setTimeout(() => {
    clearInterval(interval);
  }, 5000);
};
