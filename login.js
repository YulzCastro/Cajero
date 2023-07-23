const cuenta = document.querySelector("cuenta")
const password = document.querySelector("password")
const botonLogin = document.querySelector("cuenta")

const cuentasDeUsuario = [
    {
        saldo: 0,
        nombre: 'Andrea',
        cuenta: 456456,
        password: 456
    },
    {
        saldo: 0,
        nombre: 'Rubén',
        cuenta: 123123,
        password: 123
    },
    {
        saldo: 0,
        nombre: 'Sirius',
        cuenta: 789789,
        password: 789
    }

]

botonLogin.addEventListener('click', function(){
    const currentUser = cuenta.value
    const currentPassword = password.value 
    console.log({
        currentPassword,
        currentUser
    })

})