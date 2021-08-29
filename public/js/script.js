'use strict';


// Menu Responsivo - Hamburguer

$(document).ready(function () {
    $(".hamburguer").click(function () {
         $(this).toggleClass("active");
         $(".menu").toggleClass("active");
 });
});


// Páginas 1 e 2
let pagina1 = document.getElementById("pagina1");
let pagina2 = document.getElementById("pagina2");

function cadastraCurriculo(){
    pagina1.style.display = "none";
    pagina2.style.display = "flex";
}


// Validação do CEP
const limparFormulario = (endereco) => {
    document.getElementById('endereco').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('bairro').value = "";   
}


const preencherFormulario = (endereco) => {
    console.log("funcionando")
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('estado').value = endereco.uf;
}


const cepValido = (cep) => cep.length == 8 && /^[0-9]+$/.test(cep);

const pesquisarCep = async() =>{
    limparFormulario();
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    if(cepValido(cep)){
        const dados = await fetch(url);
        const endereco = await dados.json();
        if(endereco.hasOwnProperty('erro')){ 
           document.getElementById('endereco').value = ' CEP NÃO ENCONTRADO';
    
        }else{
            preencherFormulario(endereco);
        }

    }else{
        document.getElementById('endereco').value = 'CEP INCORRETO';        
    }
    
}

document.getElementById('cep').addEventListener('focusout', pesquisarCep);


