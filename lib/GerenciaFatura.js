class GerenciaFatura {

   testeSoma(a,b){
       return(a+b);
   };

    

 apagaMenor2000(fatura){
    return(fatura.valor > 2000);
}

 apagaEntre2000E2500ComData1Mes(fatura){
    if((fatura.dataFatura == "01/01/2020") && (fatura.valor >= 2000 && fatura.valor <= 2500)){
        return false; // ok, remove do array
    }
    return true; // permance 
}


filtroFatura(faturas) {

    let newArr = faturas;

    newArr = newArr.filter(this.apagaMenor2000);
    newArr = newArr.filter(this.apagaEntre2000E2500ComData1Mes);
    return newArr;
}

}

module.exports = GerenciaFatura;