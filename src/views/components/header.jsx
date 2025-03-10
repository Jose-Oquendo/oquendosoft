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
            </div>
        </>
    )
}

export default HeaderPage
