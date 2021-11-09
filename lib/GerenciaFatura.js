class GerenciaFatura {

   testeSoma(a,b){
       return(a+b);
   };

    

 apagaMenor2000(fatura){
    return(fatura.valor > 2000);
}


filtroFatura(faturas) {

    let newArr = faturas;

    newArr = newArr.filter(this.apagaMenor2000);
    return newArr;
}

}

module.exports = GerenciaFatura;