console.log("Conexión exitosa con JS")

const botonLogin = document.querySelector("#botonLogin")
const correoIngresado = document.querySelector("#correo")

botonLogin.addEventListener("click", function(){
    alert(`Bienvenid@ ${correoIngresado.value}`)
})
const librosPromocion = document.querySelector("#producto")

librosPromocion.addEventListener("mouseover", function () {
    librosPromocion.src = "static/image/promocion2.webp"
    librosPromocion.style.border = "3px solid #000"
});

librosPromocion.addEventListener("mouseout", function(){
    librosPromocion.src = "static/image/promocion1.jfif"
    librosPromocion.style.border = "3px solid #fff"
});

const botonAgregar = document.querySelector("#boton")
const botonAgregar2 = document.querySelector("#boton2")
const botonAgregar3 = document.querySelector("#boton3")


const contadorPedidos = document.querySelector("#pedidos")

botonAgregar.addEventListener("click", function(){
    let i = parseInt(contadorPedidos.innerText);
        i++;
        contadorPedidos.innerText = `${i}`;
});
botonAgregar2.addEventListener("click", function(){
    let i = parseInt(contadorPedidos.innerText);
        i++;
        contadorPedidos.innerText = `${i}`;
});
botonAgregar3.addEventListener("click", function(){
    let i = parseInt(contadorPedidos.innerText);
        i++;
        contadorPedidos.innerText = `${i}`;
});