class Consulta{
    acessarSite(){
        cy.visit("https://www42.bb.com.br/portalbb/daf/beneficiario,802,4647,4652,0,1.bbx");
    }

    realizarConsulta(){
        cy.get('#formulario\\:txtBenef').type("Jacarau");
        cy.get('[name="formulario:j_id16"]').click();
    }

    definirFundo(){
        cy.get('#formulario\\:comboFundo').select('51');            
    }
    definirData(dataInicial, dataFinal){

        
        cy.get('#formulario\\:dataInicial').clear().type(dataInicial);

        
        cy.get('#formulario\\:dataFinal').clear().type(dataFinal);
    
        cy.wait(1000);
    
        cy.get('[name="formulario:j_id20"]', { timeout: 10000 }).click();

            
    }
    
    
    async extrairData() {
        cy.wait(500);
        console.log('teste123')
        try {
            console.log('inciando a extração')
            const dataElement = await cy.get('#formulario\\:demonstrativoList\\:2\\:subTableLancamentos\\:2\\:j_id41', {timeout: 10000})
            .should('be.visible');
            console.log('passando')
            cy.wait(500);
            const data = await dataElement.invoke('text');

            console.log('Data extraída da tela:', data);
            
            return data;
        } catch (error) {
            console.error('Erro ao extrair data da tela:', error.message);
            throw error;
        }
    }

    async salvarDadosEmCSV(data) {
        try {
            console.log('Dados recebidos:', { data });
            const csv = await this.converterParaCsv(data);
            console.log('Conteúdo do arquivo CSV:', csv);
            cy.writeFile('teste2.csv', csv, { flag: 'w+' }); // Substitui o conteúdo existente
            console.log('Dados salvos com sucesso no arquivo dados.csv');
        } catch (error) {
            console.error(`Erro ao salvar os dados no arquivo CSV: ${error.message}`);
            throw error;
        }
    }
    
    
    async converterParaCsv(data, valor) {
        try {
            let csv = '';
            csv += 'DATA\tVALOR DISTRIBUIDO\n';
            csv += `${data}\t${valor}\n`;
            return csv;
        } catch (error) {
            console.error(`Erro ao converter dados para CSV: ${error.message}`);
            throw error;
        }
    }
    
    
    
      
      
}

export const consulta = new Consulta();