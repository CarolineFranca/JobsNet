const mongooose = require('mongoose')

const cadidateSchema = {
    nomeCompleto: {type: String, unique: false, required: true},
    cargo: {type: String, unique: false, required: true},
    dataNascimento: {type: String, unique: false, required: true},
    estadoCivil: {type: String, unique: false, required: false},
    genero: {type: String, require: false, required: false},
    email: {type: String, unique: true, required: true},
    celular: {type: Number, unique: true, required: true},
    telfixo1: {type: Number, unique: false, required: false},
    telfixo2: {type: Number, unique: false, required: false},
    telcontato: {type: Number, unique: false, required: false},
    cep: {type: Number, unique: false, required: true},
    endereco:{type: String, unique: false, required: true},
    numero: {type: String, unique: false, required: true},
    complemento: {type: String, unique: false, required: false},
    cidade: {type:  String, unique: false, required: true},
    estado: {type:  String, unique: false, required: false},
    bairro: {type: String, unique: false, required: true},
    identidade: {type: String, unique: true, required: false},
    cpf: {type: String, unique: true, required: true},
    veiculo: {type: String, unique: false, required: false},
    habilitacao: {type: String, unique: false, required: false}
}

module.exports = mongooose.model('Candidate', cadidateSchema)

