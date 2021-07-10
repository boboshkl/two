 let input = document.querySelector('input');
    let button = document.querySelector('button');
  
  
  
  button.addEventListener('click',() => {
  input.value = GeneratePassword(6);
  });
  
  
  function GeneratePassword(length = 6){
  let chartset = '+9989ahahhwheushsabwisgrbklqnydwh%eiw^@:@*^~9';
   
   let password = '';
   for(let i = 0; i < length ; ++i){
    
    let at= Math.floor(Math.random() * (chartset.length + 1));
    
    password +=chartset.charAt(at);
   }
   return  password;
  }
  let psw=document.getElementById("psw");
