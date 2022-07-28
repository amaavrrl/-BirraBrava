
window.addEventListener('load', ()=> {
    const form = document.getElementById('formulario')
    const nombre = document.getElementById('nombre')
    const mail = document.getElementById('mail')
    const mensaje = document.getElementById('mensaje')
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        validaCampos()
    })

    function validaCampos(){
        const nombreValor = nombre.value.trim();
        const mailValor = mail.value.trim();
    
        if(!nombreValor){
            console.log("LA CONCHA DE MI MADRE")
            validacionFalla(nombre, 'campo vacío')
        }else{
            validacionOk(nombre)
        }

        if(!mailValor){
            validacionFalla(mail, 'Campo vacío')
        } else if(!validaMail(mailValor)){
            validacionFalla(mail, 'El mail no es válido')
        }else{
            validacionOk(mail)
        }
    }

    const validacionFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje

        formControl.className = 'form-control falla'
    }
    const validacionOk = (input) => {
        const formControl = input.parentElement
        formControl.className = 'form-control ok'
    }

    const validaEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
    }


}
)
