const input = document.querySelector('#cantidad_deposito')
const botonDeposito = document.querySelector('#boton_deposito')
const DineroEnCuenta = document.querySelector('#tag_cuenta')
const botonRetiro = document.querySelector('#boton_retiro')
const notification = document.querySelector('.notification')

/* console.log({
    input,
    botonDeposito,
    DineroEnCuenta
}) */

const cuentaPersonal = {
    saldo: 0,
    nombre: 'Andrea',
    cuenta: 456456,
    password: 456
}

//Eventos del usuario
botonDeposito.addEventListener('click', function(e){
    console.log(e)

//Tomar la cantidad de dinero que el usuario quiere depositar.
const deposito = input.value

//Convertir la cantidad a número
const numberDeposito = Number(deposito)

//Saber cuánto dinero tiene en su cuenta.
const saldo = cuentaPersonal.saldo

if(numberDeposito > saldo) {
    returnnotification.innerHTML = "<h3>Saldo induficiente</h3>"
    return 
}

//Sumarlo con el depósito
const resultado = saldo + numberDeposito

//La cantidad que el usuario tiene en la cuenta.
DineroEnCuenta.innerText = resultado

//Actualizar el saldo.
cuentaPersonal.saldo = resultado

})

botonRetiro.addEventListener('click', function(e){
    console.log(e)

//Tomar la cantidad de dinero que el usuario quiere depositar.
const deposito = input.value

//Convertir la cantidad a número
const numberDeposito = Number(deposito)

//Saber cuánto dinero tiene en su cuenta.
const saldo = cuentaPersonal.saldo

//Sumarlo con el depósito
const resultado = saldo - numberDeposito

//La cantidad que el usuario tiene en la cuenta.
DineroEnCuenta.innerText = resultado

//Actualizar el saldo.
cuentaPersonal.saldo = resultado

})

//Validar que la cantidad de retiro no supere el saldo.


//Limpiar el input al ingresar un valor.

//Conservar el dinero en cuenta.

//Local Storage + Evento del DOM.





