const { diferencaEntreDataHojeEaFatura, diferencaEntreDataHojeEoCliente } = require('../lib/Utils');

class GerenciaFatura {

   testeSoma(a,b){
       return(a+b);
   };

    
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


filtroFatura(faturas) {

    let newArr = faturas;

    newArr = newArr.filter(this.apagaMenor2000);
    newArr = newArr.filter(this.apagaEntre2000E2500ComData1Mes);
    newArr = newArr.filter(this.apagaEntre2500E3000ComDataCliente2Meses);
    return newArr;
}

}

module.exports = GerenciaFatura;