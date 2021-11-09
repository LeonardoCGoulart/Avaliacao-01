class Fatura {

    criarFatura(codigo,valor,dataFatura,cliente){
        return (
        {
            codigo: codigo,
            valor: valor,
            dataFatura: dataFatura,
            cliente:{
                nome: cliente.nome,
                data: cliente.data,
                estado: cliente.estado
            }
        }
        )
    }

    addFaturaToArray(array, fatura){
        const arr = array;
        arr.push(fatura);
        return arr;
    }


}

module.exports = Fatura;