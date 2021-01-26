let lowerBtn = document.querySelector('#lower');
let higherBtn = document.querySelector('#higher');
let counter =  document.querySelector('#counter');


function check(){
  if(counter.innerHTML>0){
    counter.style.color = 'green';
  }
  else if(counter.innerHTML<0){
    counter.style.color = 'red';
  }
  else{
    counter.style.color = 'rgb(51, 51, 51)';
  }
}

lowerBtn.onclick = function(){
   counter.innerHTML--;
   check()
}

higherBtn.onclick = function(){
  counter.innerHTML++;
  check()
}