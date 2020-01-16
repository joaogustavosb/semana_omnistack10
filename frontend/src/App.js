import React from 'react';

function App() {
  return (
    // div externar, par organizar todo o layout
    <div id="app">
      {/* tag html usada para criar side-bar */}
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username" >Usuário do GitHub</label>
            <input name="github_username" id="github_username"></input>
          </div>

          <div className="input-block">
            <label htmlFor="techs" >Técnologias</label>
            <input name="techs" id="techs"></input>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude" >Latitute</label>
              <input name="latitude" id="latitude"></input>
            </div>
            <div className="input-block">
              <label htmlFor="longitude" >Longitude</label>
              <input name="longitude" id="longitude"></input>
            </div>
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      </aside >
      {/* tag usada para organizar conteudo principal da pag */}
      < main >

      </main >
    </div >
  );
}

export default App;
