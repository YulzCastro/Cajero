const input = document.querySelector('#cantidad_deposito')
const botonDeposito = document.querySelector('#boton_deposito')
const DineroEnCuenta = document.querySelector('#tag_cuenta')
const botonRetiro = document.querySelector('#boton_retiro')
const notification = document.querySelector('#notification')
const notificationSpan = document.querySelector('#notification span')
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
botonDeposito.addEventListener('click', function () {
  

    //Tomar la cantidad de dinero que el usuario quiere depositar.
    const deposito = input.value

    //Convertir la cantidad a número
    const numberDeposito = Number(deposito)

    //Saber cuánto dinero tiene en su cuenta.
    const saldo = cuentaPersonal.saldo

    //Sumarlo con el depósito
    const resultado = saldo + numberDeposito

    //La cantidad que el usuario tiene en la cuenta.
    DineroEnCuenta.innerText = resultado

    //Actualizar el saldo.
    cuentaPersonal.saldo = resultado
    localStorage.setItem('saldo', resultado)

})

//RETIRO
botonRetiro.addEventListener('click', function () {
  
    //Tomar la cantidad de dinero que el usuario quiere depositar.
    const deposito = input.value

    //Convertir la cantidad a número
    const numberDeposito = Number(deposito)

    //Saber cuánto dinero tiene en su cuenta.
    const saldo = cuentaPersonal.saldo

    if (numberDeposito > saldo) {
        notification.classList.remove('hidden')
        notification.innerHTML = "<h3>Saldo insuficiente</h3>"
        resetNotification()
        return
    }

    //Sumarlo con el depósito
    const resultado = saldo - numberDeposito

    //La cantidad que el usuario tiene en la cuenta.
    DineroEnCuenta.innerText = resultado

    //Actualizar el saldo.
    cuentaPersonal.saldo = resultado
    localStorage.setItem('saldo', resultado)

})

function resetNotification () {
    setTimeout(() => {
        //notification.classList.add('hidden')
        notification.classList.toggle('hidden')
    }, 3000)

}

addEventListener('DOMContentLoaded', function(){
    //Se ejecuta cuando carga todo el DOM.
    //this.sessionStorage --> Se borra cuando se cierra la sesión.
    const saldoGuardado = localStorage.getItem('saldo')
    cuentaPersonal.saldo = Number(saldoGuardado)
    //Reflejarlo en el tag del dinero.
    DineroEnCuenta.innerHTML = saldoGuardado
})

//Validar que la cantidad de retiro no supere el saldo.

//Conservar el dinero en cuenta.


//Local Storage + Evento del DOM.

//Limpiar el input al ingresar un valor.



