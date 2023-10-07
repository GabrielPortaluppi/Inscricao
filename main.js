const form = document.querySelector(".formulario")
const arrayDeArmazenamento = JSON.parse(localStorage.getItem("campo")) || []

form.addEventListener("submit", evento => {
    evento.preventDefault()

    let input = evento.target.elements["email"];
    const campo = {
        email: input.value
    }

    arrayDeArmazenamento.push(campo)

    localStorage.setItem("campo", JSON.stringify(arrayDeArmazenamento))

    window.location.href = "pag-acess.html"

})

const campo = document.querySelector("#email")

campo.addEventListener("invalid", evento => {
    evento.preventDefault()
})
campo.addEventListener("blur", () => validacao(campo))

const erros = [
    "valueMissing",
    " typeMismatch",
    "tooShort"
]

const mensagens = {
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    }
}

function validacao(campo){
    let mensagem = ""

    erros.forEach(erro => {
        if(campo.validity[erro]){
            mensagem = mensagens[campo.name][erro]
            console.log(mensagem)
        }
    })

    const span = campo.parentNode.querySelector(".mensagem-error")
    const validaCampo = campo.checkValidity()
    if(!validaCampo){
        span.textContent = mensagem
    }else{
        span.textContent = ""
    }
}