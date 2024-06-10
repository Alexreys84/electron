/**
 * processo de renderização do documento index.html
 * @author Alex dos Reis 
 */

console.log("processo de renderização")
// Processos
console.log("Processo principal")

// vinculado ao preload.js
console.log(`Electron: ${api.verElectron()}`)
api.hello()

//Função que e executada quando o botao for clicado
function sobre(){
      api.openAbout()
    
}