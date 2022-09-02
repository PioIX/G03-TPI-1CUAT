let parallax = document.querySelector(".parallax");
let parallax1 = document.querySelector(".parallax1");
let parallax2 = document.querySelector(".parallax2");

function scrollParallax(){
    let scrollTop = document.documentElement.scrollTop;
    parallax.style.transform = 'translateY(' + scrollTop * 0.2 + 'px)';
    parallax1.style.transform = 'translateY(' + scrollTop * 0.3 + 'px)';
    parallax2.style.transform = 'translateY(' + scrollTop * 0.3 + 'px)';
}   

window.addEventListener("scroll", scrollParallax)


document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();
    contenido = document.getElementById("inputMensaje").value
    let date = new Date().toISOString()
    if (document.getElementById("inputNombre").value == ""){
        nombre = "Anónimo"
    }else{
        nombre = document.getElementById("inputNombre").value
    }

    alert(nombre + " " + contenido + " " + date)

    
    document.getElementById("inputMensaje").value = ""
});

