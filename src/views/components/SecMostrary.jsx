import { useState } from "react";

import photo1 from "../../assets/img/logoBlack.png"
import photo2 from "../../assets/img/logoWhite.png"
import photo3 from "../../assets/img/logoBlue.png"

function SecMostrary(){
    const [firstPanel, setFirstPanel] = useState(1);
    const [secondPanel, setSecondPanel] = useState(2);
    const [thirdPanel, setThirdPanel] = useState(3);

    const backTo = () => {
        // Lógica para backTo
        setFirstPanel(firstPanel == 1 ? 3 : firstPanel-1)
        setSecondPanel(secondPanel == 1 ? 3 : secondPanel-1)
        setThirdPanel(thirdPanel == 1 ? 3 : thirdPanel-1)
    }
    
    const moveTo = () => {
        // Lógica para moveTo
        setFirstPanel(firstPanel == 3 ? 1 : firstPanel+1)
        setSecondPanel(secondPanel == 3 ? 1 : secondPanel+1)
        setThirdPanel(thirdPanel == 3 ? 1 : thirdPanel+1)
    }

    return (
        <>
            <div className="h-title p-0">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="d-flex gap-3">
                    <button className="btn btn-primary rounded-pill">Portafolio</button>
                    <button className="btn btn-primary rounded-pill">Contáctame</button>
                </div>
            </div>
            <div className='mostrary'>
                <div className="card select-back" onClick={backTo}>
                    {firstPanel === 1 &&
                        <div>
                            <img src={photo1} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                            <p className="card-text text-center">El enfoque de un objetivo debe ser dirijido a la mejora continua de procesos.</p>
                            </div> 
                        </div>
                    }
                    {firstPanel === 2 &&
                         <div>
                            <img src={photo2} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                            <p className="card-text text-center">Pasion y busqueda de aprendizaje son necesarias para ser el mejor.</p>
                            </div> 
                        </div>
                    }
                    {firstPanel === 3 && 
                        <div>
                            <img src={photo3} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                            <p className="card-text text-center">El desarrollo de actividades que nos divierta es la clave para una vida plena.</p>
                            </div> 
                        </div>
                    }
                </div>
                <div className="card shadow">
                    {secondPanel === 1 &&
                        <div>
                            <img src={photo1} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                            <p className="card-text text-center">El enfoque de un objetivo debe ser dirijido a la mejora continua de procesos.</p>
                            </div> 
                        </div>
                    }
                    {secondPanel === 2 &&
                         <div>
                            <img src={photo2} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                            <p className="card-text text-center">Pasion y busqueda de aprendizaje son necesarias para ser el mejor.</p>
                            </div> 
                        </div>
                    }
                    {secondPanel === 3 && 
                        <div>
                            <img src={photo3} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                            <p className="card-text text-center">El desarrollo de actividades que nos divierta es la clave para una vida plena.</p>
                            </div> 
                        </div>
                    }
                </div>
                <div className="card select-to" onClick={moveTo}>
                    {thirdPanel === 1 &&
                        <div>
                            <img src={photo1} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                            <p className="card-text text-center">El enfoque de un objetivo debe ser dirijido a la mejora continua de procesos.</p>
                            </div> 
                        </div>
                    }
                    {thirdPanel === 2 &&
                         <div>
                            <img src={photo2} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                            <p className="card-text text-center">Pasion y busqueda de aprendizaje son necesarias para ser el mejor.</p>
                            </div> 
                        </div>
                    }
                    {thirdPanel === 3 && 
                        <div>
                            <img src={photo3} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                            <p className="card-text text-center">El desarrollo de actividades que nos divierta es la clave para una vida plena.</p>
                            </div> 
                        </div>
                    }
                </div>
            </div> 
        </>
    )
}

export default SecMostrary;
