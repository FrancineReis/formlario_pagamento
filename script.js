// Requição de API via  CEP 

'use strict';

const preencherFormulario = (enderecoCompleto) => {
    document.getElementById('rua').value = enderecoCompleto.logradouro;
    document.getElementById('complemento').value = enderecoCompleto.complemento;
    document.getElementById('bairro').value = enderecoCompleto.bairro;
    document.getElementById('cidade').value = enderecoCompleto.localidade;
    document.getElementById('estado').value = enderecoCompleto.estado;

}

const pesquisarCep = async() => {
    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    const dados = await fetch(url);
    const enderecoCompleto = await dados.json();

     // Limpa o texto de erro a cada nova busca
     document.getElementById('erro-cep').textContent = '';

    if( enderecoCompleto.hasOwnProperty('erro')){
        document.getElementById('erro-cep').textContent = 'CEP não encontrado'
    }else {
        preencherFormulario(enderecoCompleto)
    }
   
}

document.getElementById("cep").addEventListener('focusout', pesquisarCep);

//document.getElementById("cep").addEventListener('focusout', pesquisarCep);