const GerenciaFatura = require("../lib/GerenciaFatura");
describe('GerenciaFatura', () => {
    test('teste commit inicial', () => {
        fatura = new GerenciaFatura();
        const valor = fatura.testeSoma(1,2);
        expect(valor).toBe(3); 
    });

   
});
