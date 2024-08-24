const input = document.getElementById('inputNumber')
const button = document.getElementById('btn-clc')
const divCreat = document.getElementById('resultado')


function calcular() {
    const inputValue  = input.value;
    const h2 = document.createElement('h2')

    const valores = inputValue.split('').map( digitos =>{
        return parseInt(digitos) ** 2;
    }).join('');

    h2.textContent = valores;
    divCreat.innerHTML = '';
    divCreat.appendChild(h2);
}

button.addEventListener('click', function(){
    
    if(input.value === ''){
        alert =  ('Insira Valores Validos')
    }else{
        calcular();
    }
})

