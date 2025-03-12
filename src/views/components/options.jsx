function Options(props){

    return (
        <>
            {/* <div className='h3'>Bienvenido!</div> */}
            <nav className="navigation navbar navbar-expand-md">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav list flex-row">
                            <li className="nav-item" onClick={() => props.changePage('home') }>Inicio</li>
                            <li className="nav-item" onClick={() => props.changePage('about') }>Acerca de mi</li>
                            <li className="nav-item" onClick={() => props.changePage('work') }>Proyectos</li>
                            <li className="nav-item" onClick={() => props.changePage('contact') }>Contactos</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Options
