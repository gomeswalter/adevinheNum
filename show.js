let buttom = document.querySelector(".ball")
let btn = document.querySelector(".btnShow");
let resultado = document.querySelector(".result")

let modal = document.querySelector(".modal")

function show(){
  
let inputs = document.getElementById("choose").value;



    let escolhido = buttom.innerText=Math.floor(Math.random()*10);
  resultado.innerText=escolhido;
  

  let randNum = Math.trunc(Math.random()*10**6);
 
  
  buttom.style.backgroundColor="#"+[randNum];
  buttom.style.transform="rotate("+[randNum]+"deg"+")";
  modal.style.backgroundColor="#fff"
  
  setTimeout( function mostrar(){
  if(input = ""){
    alert("Insira número")
  }
  else if(inputs != escolhido){
  modal.style.opacity="100%";
  modal.innerText="Errou, Tente outra vez";
  modal.style.backgroundColor="red"
}
else if(inputs = escolhido){
  modal.style.opacity="100%";
  modal.innerText= "Acertou!!!!, o número; escolhido é: " + escolhido;
  modal.style.backgroundColor="green";
}},500)

}