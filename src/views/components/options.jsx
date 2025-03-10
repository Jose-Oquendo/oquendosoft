function Options(props){

    return (
        <>
            {/* <div className='h3'>Bienvenido!</div> */}
            <div className="navigation">
                <ul className="nav list">
                    <li className="nav-item" onClick={() => props.changePage('home') }>Inicio</li>
                    <li className="nav-item" onClick={() => props.changePage('about') }>Acerca de mi</li>
                    <li className="nav-item" onClick={() => props.changePage('work') }>Proyectos</li>
                    <li className="nav-item" onClick={() => props.changePage('contact') }>Contactos</li>
                </ul>
            </div>
        </>
    )
}

export default Options
