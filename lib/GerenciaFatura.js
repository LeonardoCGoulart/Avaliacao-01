const { diferencaEntreDataHojeEaFatura, diferencaEntreDataHojeEoCliente, ehClienteDoSul } = require('../lib/Utils');

class GerenciaFatura {

 apagaMenor2000(fatura){
    return(fatura.valor > 2000);
}

 apagaEntre2000E2500ComData1Mes(fatura){
    const days = diferencaEntreDataHojeEaFatura(fatura); 

    if((days <= 30) && (fatura.valor >= 2000 && fatura.valor <= 2500)){  // considera que 1 mes tem 30 dias
        return false; // ok, remove do array
    }
    return true; // permance 
}

 apagaEntre2500E3000ComDataCliente2Meses(fatura){
    const days = diferencaEntreDataHojeEoCliente(fatura); 

    if((days <= 60) && (fatura.valor >= 2500 && fatura.valor <= 3000)){  // considera que 1 mes tem 30 dias
        return false; // ok, remove do array
    }
    return true; // permance 
}

 apagaMaior4000ComClienteSul(fatura){
    let ehSul = ehClienteDoSul(fatura.cliente);

    if((ehSul == true) && (fatura.valor > 4000)){  
        return false; // ok, remove do array
    }
    return true; // permance 
}

filtroFatura(faturas) { // remove faturas de um array/lista de acordo com alguns filtros/regras de negócio.

    let newArr = faturas;

    newArr = newArr.filter(this.apagaMenor2000); // realiza o primeiro filtro (apaga fatura c/ valor < 2000)
    newArr = newArr.filter(this.apagaEntre2000E2500ComData1Mes); // realiza o segundo filtro (apaga fatura c/ valor 2000-2500 cuja data tem 1 mes ou menos)
    newArr = newArr.filter(this.apagaEntre2500E3000ComDataCliente2Meses); // realiza o terceiro filtro (apaga fatura c/ valor 2500-3000 cuja data inclusão cliente tem 2 mes ou menos)
    newArr = newArr.filter(this.apagaMaior4000ComClienteSul); // realiza o quarto filtro (apaga fatura c/ valor > 4000 cujo cliente é do sul)

    return newArr; // retorna o array atualizado
}

}

module.exports = GerenciaFatura;