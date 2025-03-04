// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import '../assets/css/App.css'
import Flies from './utils/flies.jsx';
import HeaderPage from './components/header.jsx';
import SecMostrary from './components/SecMostrary.jsx';

function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
      <main className="container-back">
        <Flies></Flies>
      </main>
      <main className="container">
        <header>
          <HeaderPage></HeaderPage>
        </header>
        <section className='mostrary'>
          <SecMostrary></SecMostrary>
        </section>
        <section className="profile-section">
          <div><img src="..." className='' alt="Usuario"></img></div>
          <div className="profile">
              <h3>Mi Presentación</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet felis justo.</p>
              <a href="#">Leer más</a>
          </div>
          <div className="info-section">
              <h3>Introducción</h3>
              <ul>
                  <li>Trabajos</li>
                  <li>Diseños</li>
              </ul>
              <button>Curriculum</button>
          </div>
          {/* <div><img src="..." className='' alt="Usuario"></img></div>
          <div className="details">
            <div className="info-title">Quien soy</div>
            <p>Esta es una descripcion de mi persona como profesional</p>
            <button className="btn btn-primary"></button>
          </div>
          <div className='more'>
            Acerca de mi
            <div className="line"></div>
            <ul className="list-info">
              <li><i className="bi bi-person"></i> Info de mi persona</li>
              <li><i className="bi bi-person"></i> Info de mi persona</li>
              <li><i className="bi bi-person"></i> Info de mi persona</li>
            </ul> 
          </div> */}
        </section>
        <footer></footer>

      </main>
    </>
  )
}

export default App
