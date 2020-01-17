import React, { useState, useEffect } from 'react'
import server from './api/Api';

// componentes
import DevItem from './components/DevItem/index'
import DevForm from './components/DevForm/index'

// Arquivos css
import "./Css/global.css"
import "./Css/App.css"
import "./Css/SideBar.css"
import "./Css/Main.css"


function App() {

  const [devs, setDevs] = useState([])

  // Dispara quando precisa listar os dev
  useEffect(() => {
    async function loadDevelopers() {
      const response = await server.get("/")
      console.log(response.data)
      setDevs(response.data)
    }
    loadDevelopers()
  }, [])

  // Dispara quando o usuário se cadastra
  async function handleSubmit(data) {
    const response = await server.post('/registrandodevs', data)
    setDevs([...devs, response.data])
  }

  return (
    // div externar, par organizar todo o layout
    <div id="app">
      {/* tag html usada para criar side-bar */}
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleSubmit} />
      </aside >
      {/* tag usada para organizar conteudo principal da pag */}
      < main >
        <ul>
          {
            devs.map(dev => {
              return (
                <DevItem key={dev.id} dev={dev} />
              )
            })
          }
        </ul>
      </main >
    </div >
  );
}

export default App;
