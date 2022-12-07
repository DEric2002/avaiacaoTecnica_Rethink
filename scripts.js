

/*
Olá, eu não estava preparado para este teste pratico(primeira experiencia com JavaScript)
dei o máximo de mim no momento! tive que consumir muito conteudo na internet,
e cheguei ate aqui... entendo que está uma "gabiarra", 
mas é oque conssegui aprensentar nesses 3 dias de teste... 
irei buscar novos conhecimentos e atingir o resultado desejado!
Emfim...


    O Contexto desafio
O Detran está com dificuldades com a base dos seus sistemas
e precisa de ajuda na parte de cadastro. Em um primeiro momento,
eles precisam que seja elaborada uma nova base de cadastros para
que o sistema volte a funcionar e não percam nenhum dado.
*/


const form = document.getElementById("form");
const username = document.getElementById("username");
const age = document.getElementById("age");
const profession = document.getElementById("profession");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const date = document.getElementById("date");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();

});


// abaixo segue oque se pede no segundo desafio 
const pessoas = [] // lista de pessoas cadastradas

function receberDados() {
    var username = document.querySelector("#username").value;
    var age = document.querySelector("#age").value;
    var profession = document.querySelector("#profession").value;
    var email = document.querySelector("#email").value;
    var phone = document.querySelector("#phone").value;
    var date = document.querySelector("#date").value;

    pessoas.push({ username, age, profession, email, phone, date });// adicionar um dicionario a lista vazia de " pessoas"
    console.log(pessoas);
}

// abaixo segue oque se pede no terceiro desafio
function retornaDados() {
    let pessoa;

    for (var i = 0; i < pessoas.length; i++) {
      /*OBS: quando adicionado no formulario um nome igual o passado no parametro,
        o programa vai retornar no console se existe algum registro com esse nome.
        ex: parametro = "Gabriel Gomes"
            retorno >>> {username: 'Gabriel Gomes', age: '20', ...}
      */
        if (pessoas[i].username === "Gabriel Gomes") { 

            pessoa = pessoas[i];
            console.log("Nome encontrado!") // alertando que o nome passado no paranmetro foi encontrado
            console.log(pessoa); // mostrando o dicionario correspondente ao nome
            break; // encerra o loop quando encontra o item
        }
    }
    
}

// abaixo segue oque se pede no quarto desafio
const nomes = [];// criando um novo vetor para armazenar penas os nomes

function apenasNomes() {
    var username = document.querySelector("#username").value;
    
    nomes.push(username); // adicionando os nomes no vetor "nomes"
    console.log(nomes); // mostrando no console
}


/*função que verifica os erros de preenchimento do formulário,
 onde todos os campos devem ser preenchidos*/
function checkInputs() {

    const usernameValue = username.value;
    const ageValue = age.value;
    const professionValue = profession.value;
    const emailValue = email.value;
    const phoneValue = phone.value;
    const dateValue = date.value;


    if (usernameValue === "") {
        setErrorFor(username, "O nome de usuário é obrigatório!");
    } else {
        setSuccessFor(username);
    }

    if (ageValue === "") {
        setErrorFor(age, "A idade é obrigatória!");
    } else {
        setSuccessFor(age);
    }

    if (professionValue === "") {
        setErrorFor(profession, "Aprofissão é obrigatória!");
    } else {
        setSuccessFor(profession);
    }

    if (emailValue === "") {
        setErrorFor(email, "O email é obrigatório!");
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Por favor insira um email válido!");
    } else {
        setSuccessFor(email)
    }

    if (phoneValue === "") {
        setErrorFor(phone, "O telefone é obrigatorio!");
    } else {
        setSuccessFor(phone);
    }

    if (dateValue == "") {
        setErrorFor(date, "A data é obrigatória!");
    } else {
        setSuccessFor(date);
    }

    const formControls = form.querySelectorAll(".form-control"); // controle de erros, para adicionar a "formControls" todas divs com classe "form-control"

    const formIsValid = [...formControls].every((formControl) => { // verifica se o formulario esta completamente preenchido de maneira correta
        return formControl.className === "form-control success"; // nomeando a classe como "form-control success", para que seja indicado que foi corretamente preenchido
    });

    if (formIsValid) { // se formulario for válido, mostra mensagem que esta tudo certo e mostra a lista no console
        console.log("Formulário está 100% válido!");
        receberDados();
        retornaDados();
        apenasNomes();
        adicionarId()
    }
}

function setErrorFor(input, message) { // funcao que mosta mensagem de erro 
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    // Adiciona a mensagem de erro
    small.innerText = message;

    // Adiciona a classe de erro
    formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    // Adicionar a classe de sucesso
    formControl.className = "form-control success";
}

function checkEmail(email) { // função verifica se o email é valido!
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}



