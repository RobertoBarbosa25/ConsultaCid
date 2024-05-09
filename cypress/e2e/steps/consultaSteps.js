/// <reference types="cypress" />

import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import { consulta } from "../../pages/consulta"

Given ("Que o usuário acesse a página inicial de consulta", ()=>{
    consulta.acessarSite();
})

And ("ao realizar uma consulta", () =>{
    consulta.realizarConsulta();
})
And ("o usuário venha a definir o fundo", () => {
    consulta.definirFundo();
})
Then ("o usuário define as datas", () => {
    const dataInicial = '01012018'
    const dataFinal = '20012018'
    consulta.definirData(dataInicial, dataFinal)
})
And("salva os dados em CSV", async () => {
    console.log('vou consultar o extrair data')
    try {
        const data = await consulta.extrairData();
        //const data  =  '20012023';
        
        console.log('Data extraída:', data);
        
        // Chame sua função para salvar em CSV passando a data
        await consulta.salvarDadosEmCSV(data);
    } catch (error) {
        console.error(error);
    }
});
