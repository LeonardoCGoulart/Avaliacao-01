const GerenciaFatura = require("../lib/GerenciaFatura");
const Cliente = require("../lib/Cliente");
const Fatura = require("../lib/Fatura");
describe('GerenciaFatura', () => {

    test('teste fatura - menor que 2000', () => {
        cliente = new Cliente();
        fatura = new Fatura();
        
        const cliente1 = cliente.criarCliente('leo', '1/1/1', 'pr');
        const cliente2 = cliente.criarCliente('joao', '2/2/2', 'sp');

        const fatura1 = fatura.criarFatura('codigo', 100, '1/1/1', cliente1);
        const fatura2 = fatura.criarFatura('codigo2', 1000, '2/2/2', cliente2);

        let arr = []
        arr = fatura.addFaturaToArray(arr,fatura1)
        arr = fatura.addFaturaToArray(arr,fatura2)
        
        filtroFatura = new GerenciaFatura();
        arr = filtroFatura.filtroFatura(arr);

        const tamanhoArray = arr.length;
        expect(tamanhoArray).toBe(0); 
    });
    
    test('teste fatura - valor entre 2000 - 2500 e data <= 1 mes', () => {
        cliente = new Cliente();
        fatura = new Fatura();
        
        const cliente1 = cliente.criarCliente('leo', '1/1/1', 'pr');

        const fatura1 = fatura.criarFatura('codigo', 2500, '2021-11-01', cliente1);

        let arr = []
        arr = fatura.addFaturaToArray(arr,fatura1)
        
        filtroFatura = new GerenciaFatura();
        arr = filtroFatura.filtroFatura(arr);

        const tamanhoArray = arr.length;
        expect(tamanhoArray).toBe(0); 
    });

    test('teste fatura - valor entre 2500 - 3000 e data cliente <= 2 meses', () => {
        cliente = new Cliente();
        fatura = new Fatura();
        
        const cliente1 = cliente.criarCliente('leo', '2021-11-01', 'pr');
        const fatura1 = fatura.criarFatura('codigo', 3000, '2021-11-01', cliente1);

        let arr = []
        arr = fatura.addFaturaToArray(arr,fatura1)
        
        filtroFatura = new GerenciaFatura();
        arr = filtroFatura.filtroFatura(arr);

        const tamanhoArray = arr.length;
        expect(tamanhoArray).toBe(0); 
    });

    test('teste fatura - valor entre 2500 - 3000 e data cliente <= 2 meses - II', () => {
        cliente = new Cliente();
        fatura = new Fatura();
        
        const cliente1 = cliente.criarCliente('leo', '2021-11-01', 'pr'); // cliente data < 2 meses logo a fatura deve ser apagada
        const fatura1 = fatura.criarFatura('codigo', 3000, '2021-11-01', cliente1);

        const cliente2 = cliente.criarCliente('joao', '2021-08-01', 'pr'); // cliente data > 2 meses logo a fatura não deve ser apagada
        const fatura2 = fatura.criarFatura('codigo2', 3500, '2021-11-01', cliente2);

        let arr = []
        arr = fatura.addFaturaToArray(arr,fatura1)
        arr = fatura.addFaturaToArray(arr,fatura2)
        
        filtroFatura = new GerenciaFatura();
        arr = filtroFatura.filtroFatura(arr);

        const tamanhoArray = arr.length;
        expect(tamanhoArray).toBe(1); 
    });

    test('teste fatura - valor maior que 4000 e cliente da região sul do Brasil', () => {
        cliente = new Cliente();
        fatura = new Fatura();
        
        const cliente1 = cliente.criarCliente('leo', '2021-11-01', 'pr'); // fatura > 4000 e cliente do sul, a fatura deve ser apagada
        const fatura1 = fatura.criarFatura('codigo', 4001, '2021-11-01', cliente1);

        let arr = []
        arr = fatura.addFaturaToArray(arr,fatura1)
        
        filtroFatura = new GerenciaFatura();
        arr = filtroFatura.filtroFatura(arr);

        const tamanhoArray = arr.length;
        expect(tamanhoArray).toBe(0); 
    });

    test('teste fatura - valor maior que 4000 e cliente da região sul do Brasil II', () => {
        cliente = new Cliente();
        fatura = new Fatura();
        
        const cliente1 = cliente.criarCliente('leo', '2021-11-01', 'pr'); // fatura > 4000 e cliente do sul, a fatura deve ser apagada
        const fatura1 = fatura.criarFatura('codigo', 4001, '2021-11-01', cliente1);

        const cliente2 = cliente.criarCliente('joao', '2021-11-01', 'sp'); // fatura > 4000 e cliente de SP, a fatura nao deve ser apagada
        const fatura2 = fatura.criarFatura('codigo2', 4001, '2021-11-01', cliente2);

        let arr = []
        arr = fatura.addFaturaToArray(arr,fatura1)
        arr = fatura.addFaturaToArray(arr,fatura2)
        
        filtroFatura = new GerenciaFatura();
        arr = filtroFatura.filtroFatura(arr);

        const tamanhoArray = arr.length;
        expect(tamanhoArray).toBe(1); 
    });

   
});
