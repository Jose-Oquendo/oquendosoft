import titleOquendoSoft from '../../assets/img/titleOne.png'

function HeaderPage(){

    return (
        <>
            <div className="h-title">
                <img src={titleOquendoSoft}  title="OquendoSoft"></img>
                <div className="welcome text-secondary">
                    <div className="line"></div>
                    <span>Bienvenido</span>
                    <div className="line"></div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="d-flex gap-3">
                    <button className="btn btn-primary rounded-pill">Portafolio</button>
                    <button className="btn btn-primary rounded-pill">Contáctame</button>
                </div>
            </div>
            <div className='h-content'>
                <div className='h3'>Bienvenido!</div>
                <div className="navigation">
                    <ul className="nav nav-pills justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default HeaderPage
