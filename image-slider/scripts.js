const arrayOfImages = [
   "1",
   "2",
   "3",
   "4"
];

const imageDIV = document.querySelector(".img-container");

const leftBtn =  document.querySelector(".left-btn");
const rightBtn =  document.querySelector(".right-btn");
let counter = 0;

imageDIV.style.backgroundImage =  `url('img/${arrayOfImages[counter]}.jpg')`

leftBtn.onclick = () => {
  counter--;
  if(counter<0){
    counter = arrayOfImages.length - 1;
  }
  imageDIV.style.backgroundImage =  `url('img/${arrayOfImages[counter]}.jpg')`

}

rightBtn.onclick = () => {
  counter++
  if(counter>arrayOfImages.length-1){
    counter = 0;
  }
  console.log(arrayOfImages[counter])
  imageDIV.style.backgroundImage =  `url('img/${arrayOfImages[counter]}.jpg')`
}