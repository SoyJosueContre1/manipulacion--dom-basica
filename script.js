let h1 = document.querySelector("h1");
let form = document.querySelector('#form')
let input1 = document.querySelector("#calculo1");
let input2 = document.querySelector("#calculo2");
let btn = document.querySelector("#btnCalcular");
let resultado = document.querySelector(".resultado");

form.addEventListener('submit',sumarInputValues);

function sumarInputValues(event) {
    // console.log(event);
    event.preventDefault();
    const suma = Number(input1.value)+parseInt(input2.value);
    resultado.innerText =  "Resultado: " + suma;
}

// btn.addEventListener('click',boton);

// function boton(){
//     const suma = Number(input1.value)+parseInt(input2.value);
//     resultado.innerText =  "Resultado: " + suma;
// }
