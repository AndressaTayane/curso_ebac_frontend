const form = document.getElementById('form-calculo');
let numberA = document.getElementById('number-a');
let numberB = document.getElementById('number-b');

function validarNum (nA, nB){
    const validacao = nA < nB
    if (validacao) {
        return "O número é válido, "+ nA + " é menor que " + nB; 
    } else {
        return "O número é inválido, "+ nA + " é maior que " + nB; 
    }
}

function validar2Num (nA, nB){
    const validacao = nA < nB
    if (validacao) {
        return true; 
    } else {
        return false; 
    }
}


form.addEventListener('submit', function(e) {
    e.preventDefault();
    //alert(validarNum (parseFloat(numberA.value),parseFloat(numberB.value))) // Aviso usando Alert
    if (validar2Num (parseFloat(numberA.value),parseFloat(numberB.value))) {
        document.querySelector('.error-message').style.display = 'none'
        document.querySelector('.success-message').style.display = 'block'
    } else {
        document.querySelector('.error-message').style.display = 'block'
        document.querySelector('.success-message').style.display = 'none'
    }

})

