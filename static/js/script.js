console.log("Conexión exitosa con JS")

const botonLogin = document.querySelector("#botonLogin")
const correoIngresado = document.querySelector("#correo")

botonLogin.addEventListener("click", function(){
    alert(`Bienvenid@ ${correoIngresado.value}`)
})