const express = require('express')
const path = require('path')
const Candidate = require('../models/Candidate')

module.exports = {

    async register(req,res){

        const {nomeCompleto,cargo,dataNascimento,
                estadoCivil,genero,email,celular,
                telfixo1,telfixo2,telcontato,cep,
                endereco,numero,complemento,cidade, estado,
                bairro, identidade,cpf,veiculo,habilitacao} = await req.body
        
        const newCandidate = new Candidate()

        newCandidate.nomeCompleto = nomeCompleto;
        newCandidate.cargo = cargo;
        newCandidate.dataNascimento = dataNascimento;
        newCandidate.estadoCivil = estadoCivil;
        newCandidate.genero = genero;
        newCandidate.email = email;
        newCandidate.celular = celular;
        newCandidate.telfixo1 = telfixo1;
        newCandidate.telfixo2 = telfixo2;
        newCandidate.telcontato = telcontato;
        newCandidate.cep = cep;
        newCandidate.endereco = endereco;
        newCandidate.numero = numero;
        newCandidate.complemento = complemento;
        newCandidate.cidade = cidade;
        newCandidate.estado = estado;
        newCandidate.bairro = bairro;
        newCandidate.identidade = identidade;
        newCandidate.cpf = cpf;
        newCandidate.veiculo = veiculo;
        newCandidate.habilitacao = habilitacao;


        newCandidate.save((err, saved)=>{
            if(err){
                console.log(err)
                return res.status(500).send('Não foi possível salvar o registro ... ' + err)
            } else{
                return res.status(200).send('Cadastrado com sucesso!')
            }
        })
    }


}