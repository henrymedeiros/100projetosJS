
const input = document.querySelector('input');
const showMessageElem = document.querySelector('p');


input.addEventListener('keyup', function(e){
  var key = e.which || e.keyCode;
  if (key == 13) {
    const message = document.querySelector('input').value;
        if(message==''){
            alert('Você não enviou uma mensagem!');
            return 0;
        }
        else{
            showMessageElem.textContent = message;
        console.log(message);
        input.value = '';
        }
        
  }
});