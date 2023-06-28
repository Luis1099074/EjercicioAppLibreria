// Evento para crear un nuevo libro 
document.getElementById("Formulario").addEventListener("submit", crear);


// funcion de crear 
function crear(e){
    titulo = document.getElementById("titulo").value
    descripcion = docuemt.getElementById("descripcion").value
    precio = docuemt.getElementById("precio").value

    let libro = {
        titulo,
        descripcion,
        precio
    }
    if(localStorage.getItem("Libros") === null){
        let libros= []
        libros.push(libro)
        localStorage.setItem("Libros",JSON.stringify(libros))
    }else {
    let libros = JSON.parse(localStorage.getItem("Libros"))
    libros.push(libro)
    localStorage.getItem("Libros",JSON.stringify(libros))
    }

    document.getElementById("formulario").reset();
    e.preventDefault()


}