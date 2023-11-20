let $login = $('#login');

let inputValue3 = document.querySelector('#pa');

inputValue3.addEventListener('click', function() {
  $login.css({color: '#fff', backgroundColor: '#0ABB87'}); 
})

function inputValueChange(){
  let inputValue = document.querySelector('#id').value;
  let inputValue2 = document.querySelector('#pa').value;


  if(inputValue && inputValue2) {
    $login.css({color: '#fff', backgroundColor: '#0ABB87'}); 
  } else {
    $login.css({color: '#333', backgroundColor: 'rgb(199, 199, 199)'}); 
  }
}



