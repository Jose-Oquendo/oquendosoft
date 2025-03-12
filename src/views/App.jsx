import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import '../assets/css/App.css'
import Flies from './utils/flies.jsx';
import HeaderPage from './components/header.jsx';
import SecMostrary from './components/SecMostrary.jsx';
import Options from './components/options.jsx';
import myself from '../assets/img/myself.jpg'

function App() {
  const [page, setPage] = useState('home')

  return (
    <>
      <main className="container-back">
        <Flies></Flies>
      </main>
      <main className="mycontainer">
        <section className="mycontent">
          <HeaderPage></HeaderPage>
          {page == 'home' && <div><SecMostrary></SecMostrary></div> }
          {page == 'about' && 
            <div className="overflow-scoll">
              <div className="profile-section">
                <div className='d-flex'>
                  <div className="profile-photo"><img src={myself} className='' alt="Usuario"></img></div>
                  <div className="profile">
                      <h3>Mi Presentación</h3>
                      <p>Es un gusto! Mi nombre es Juan Jose Oquendo Medina. Quiero contarte mi lema: "El trabajo se hace con pasión, buscando siempre la mejora continua" Por eso soy desarrollador de software... </p>
                      <a href="#">Leer más</a>
                  </div>
                </div>
                <div className="info-section">
                    <h3>Experiencia</h3>
                    <ul>
                        <li>- Creacion de servicios API.</li>
                        <li>- Desarrollo de plataformas empresariales.</li>
                        <li>- Diseño y gestion de bases de datos.</li>
                    </ul>
                    <button>Curriculum</button>
                </div>
              </div>
            </div>
          }
          {page == 'work' && <div>Trabajos</div>}
          {page == 'contact' && <div>Contactos</div>}
        </section>
        <section className="options-select">
          <Options changePage={setPage}></Options>
        </section>
      </main>
      <footer></footer>
    </>
  )
}

export default App
