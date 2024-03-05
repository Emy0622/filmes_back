/******************************************************************************************
 * Objetivo: Arquivo responsavel pela interção entre o APP e a model, que teremos todas as tratativas e regra de negocio para o crud de filmes 
 * Autora: Yasmin Targino de Alexandre
 * Data: 30/01/2024
 * Versão: 1.0.1.24
 *****************************************************************************************/
//import do arquivo de configuração do projeto 
const message = require('../modulo/config.js');

const { filmes } = require("../model/filmes")

// import do arq DAO para manipular dados do banco de dados
const filmesDAO = require('../model/DAO/filme.js')

// funcao para inserir um novo filme do banco de dados

const setInserirNovoFilme = async function(dadosFilme) {

    let resultDadosFilme = {}

    console.log(dadosFilme)
    if (dadosFilme.nome == '' ||  dadosFilme.nome == underfined || dadosFilme.nome.length > 80 || 
        dadosFilme.sinopse == '' || dadosFilme.sinopse == undefined || dadosFilme.sinopse.length > 65000 ||
         dadosFilme.duracao == '' || dadosFilme.duracao == undefined || dadosFilme.duracao.length > 8 ||
         dadosFilme.data_lancamento == '' || dadosFilme.data_lancamento == undefined || dadosFilme.sinopse.data_lancamento > 10 ||
         dadosFilme.data_relancamento > 10 ||
         dadosFilme.foto_capa == '' || dadosFilme.foto_capa == undefined || dadosFilme.foto_capa.length > 200 ||
         dadosFilme.valor_unitario.length > 8 

        ) {
            //mensagem de erro
            return message.ERROR_REQUIRED_FIELDS; //400 CAMPOS OBRIGATÓRIOS / INCORRETOS
        
    } else {
//Validação para chamar o DAO para inserir os dados
        let dadosValidated = false;

        //verificação para data de relançamento que não é campo obrigatório

        //Variavel pra validar se poderemos chamar o DAO para inserir os dados

        if (dadosFilme.data_lancamento != undefined && null && ""){
            if(dadosFilme.data_relancamento.length != 10)
            return message.ERROR_REQUIRED_FIELDS; //400 campos obrigatorios 
        else 

        dadosValidated = true // se a data estiver exatamente 10 caracteres

        }else{

            dadosValidated = true //Se a data não existir nos dados
        }
   
        if(dadosValidated) {

        let novofilme = await filmesDAO.insertFilme(dadosFilme);


        //validação para verificar se os dados foram inseridos pelo DAO no BD
        if(novofilme){
            //Cria o padrão JSON para retorno dos dados criados no BD
        resultDadosFilme.status = message.SUCESS_CREATED_ITEM.status;
        resultDadosFilme.status_code = message.SUCESS_CREATED_ITEM.status_code;
        resultDadosFilme.message = message.SUCESS_CREATED_ITEM.message;
        resultDadosFilme.filme = dadosFilme;

        return resultDadosFilme; //201
        
        }else{
            return message.ERROR_TERMINAL_SERVER_DB//500 erro na camada do DAO
        }

    
    }

}
}


// funcao para atualizar um filme do banco de dados
const setAtualizarFilme = async function() {

}

// funcao para excluir um filme do banco de dados
const setExcluirFilme = async function(id) {

}

// funcao para retornar todos os filmes do banco de dados
const getListarFilme = async function() {

    //criar uma variavel do tipo json
    let filmesJSON = {};

    //chama  a função do DAO para buscar
    let dadosFilmes = await filmesDAO.selectAllFilmes();

    if(dadosFilmes){
        filmesJSON.filmes = dadosFilmes;
        filmesJSON.quantidade = dadosFilmes.length;
        filmesJSON.status_code = 200
        return filmesJSON;

    }else{
        return false;
    }
    

}

// funcao para buscar um filme do banco de dados pelo id
const getBuscarFilme = async function(id) {
        //recebe o id do filme 
let idfilme = id;
let filmeJSON = {}

//tratativa

//validação para quando o id for vazio/indefinido || não é um numero
if(idfilme == '' || idfilme == undefined ||isNaN(idfilme)){
    return message.ERRO_INVALID_ID;
}else{ 
let dadosFilmes = await filmesDAO.selectByIdFilme(idfilme);

if(dadosFilmes){
    filmeJSON.filme = dadosFilmes;
    filmeJSON.status_code = 200;

    return filmeJSON;
}else{
    return message.ERRO_NOT__FOUND;
}
}
}



module.exports = {
    setAtualizarFilme,
    setInserirNovoFilme,
    setExcluirFilme,
    getBuscarFilme,
    getListarFilme
}
    