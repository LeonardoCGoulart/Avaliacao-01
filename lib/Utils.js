function diferencaEntreDataHojeEaFatura(fatura){
    const now = new Date(); // Data de hoje
    const past = new Date(fatura.dataFatura); // Outra data no passado
    const diff = Math.abs(now.getTime() - past.getTime()); // Subtrai uma data pela outra
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).
    return days;
 }

function diferencaEntreDataHojeEoCliente(fatura){
    const now = new Date(); // Data de hoje
    const past = new Date(fatura.cliente.data); // Outra data no passado
    const diff = Math.abs(now.getTime() - past.getTime()); // Subtrai uma data pela outra
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).
    return days;
 }

 function ehClienteDoSul(cliente){
    if(cliente.estado == "pr" ||
       cliente.estado == "sc" ||
       cliente.estado == "rs") 
       return true;
    else
       return false;
 }

 // (créditos) função baseada no site:
 // https://metring.com.br/diferenca-entre-datas-em-javascript

module.exports = {
    diferencaEntreDataHojeEaFatura,
    diferencaEntreDataHojeEoCliente,
    ehClienteDoSul
};