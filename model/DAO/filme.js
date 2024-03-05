/******************************************************************************************
 * Objetivo: Criar a interação com o banco de dados MYSQL para fazer o CRUD de filmes 
 * Autora: Yasmin Targino de Alexandre
 * Data: 30/01/2024
 * Versão: 1.0.1.24
 *****************************************************************************************/

//inserir um novo filme
const insertFilme = async function(){

}

//atualizar um filme existente filtrando pelo ID
const updateFilme= async function(id){

}

//Excluir um filme existente filtrando pelo ID
const deleteFilme = async function(id){

}

//Listar todos os filmes existentes na tabela 
// listar todos os filmes existentes na tabela
const selectAllFilmes = async function() {


    // sql script para listar todos os filmes existentes
    let sql = 'SELECT * FROM tbl_filme order by id desc'

    // $queryRawUnsafe(sql) --- encaminha apenas a variável
    // $queryRaw('SELECT * FROM tbl_filme') --- encaminha o script

    let rsFilmes = await prisma.$queryRawUnsafe(sql)

    // tratamento de dados para retornar dados ou false
    if (rsFilmes.length > 0)
        return rsFilmes
    else
        return false

}


//Buscar o filme filtrando pelo ID
const selectByIdFilme = async function(id){

    let sql = `SELECT * FROM tbl_filme WHERE id =${id}`;

    //Executa Banco de Dados o script SQL
    let rsFilmes = await prisma.$queryRawUnsafe(sql);

    if(rsFilmes.length > 0)
    return rsFilmes
else
return false;

}

//Buscar o filme filtrando pelo nome
const selectByNomeFilme = async function(id){
    
}

module.exports = {
    insertFilme,
    updateFilme,
    deleteFilme,
    selectAllFilmes,
    selectByIdFilme,
    selectByNomeFilme
}

