
//console.log("Processo principal")
const { app, BrowserWindow, nativeTheme, Menu, shell } = require('electron')

// Janela Principal
const createWindow = () => {
  //nativeTheme.themeSource='dark'
  const win = new BrowserWindow({
    width: 800, //Largura da janela
    height: 600, // Altura da janela
    icon:'./src/public/img/pc.png' 
    //resizable: false, // evitar o redimensinamento
    //titleBarStyle:'hidden', // esconde a barra de menu barra de titulo
   //autoHideMenuBar:true // esconde somente o menu
  })
  // iniciar a janela com o menu personalizado
  Menu.setApplicationMenu(Menu.buildFromTemplate(template))

  win.loadFile('./src/views/index.html')
}

// janela sobre
const aboutWindow = () => {
  //nativeTheme.themeSource='dark'
  const about = new BrowserWindow({
    width: 360, //Largura da janela
    height: 220, // Altura da janela
    icon:'./src/public/img/pc.png', 
    resizable: false, // evitar o redimensinamento
    autoHideMenuBar:'hidden' // esconde a barra de menu barra de titulo
  
  })

  about.loadFile('./src/views/sobre.html')
}



// Executar de forma assíncrona a aplicação.
app.whenReady().then(() => {
  createWindow()
})

// criando um template do menu personalizado
const template =[
  {
    label:'Arquivo',
    submenu:[
        {
          label:'Sair',
          click:()=> app.quit(),
          accelerator:'Alt+f4'
        },      
    ]
    
  },
  {
    label:'Exibir',
    submenu:[
      {
        label:'Recarregar',
        role:'reload'
      },
      {
        label:'ferramenta do desenvolvedor',
        role:'toggledevRools'
      },
      {
        type:'separator'
      },
      {
        label:'Aplicar zoom',
        role:'zoomIn'
      },
      {
        label:'Reduzir o zoom',
        role:'zoomOut'
      },
      {
        label:'restaurar o zoom padrão',
        role:'resetZoom'
      }
    ]

  },
  {
    label:'Ajuda',
    submenu:[
      {
label:'docs',
accelerator:'Alt+f1',
click: ()=> shell.openExternal('https://www.electronjs.org/docs/latest/'),
      },
      {
        type:'separator',
      },
      {
        label:'Sobre',
        
        click:()=>aboutWindow()
      }
    ]
  },
]
