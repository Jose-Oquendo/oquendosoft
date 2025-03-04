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
            <div className="card select-back" onClick={backTo}>
                {firstPanel === 1 &&
                    <div>
                        <img src={photo1} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                        <p className="card-text">1. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div> 
                    </div>
                }
                {firstPanel === 2 &&
                    <div>
                        <img src={photo2} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                        <p className="card-text">2. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div> 
                    </div>
                }
                {firstPanel === 3 && 
                    <div>
                        <img src={photo3} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                        <p className="card-text">3. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div> 
                    </div>
                }
            </div>
            <div className="card shadow">
                {secondPanel === 1 &&
                    <div>
                        <img src={photo1} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                        <p className="card-text">1. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div> 
                    </div>
                }
                {secondPanel === 2 &&
                    <div>
                        <img src={photo2} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                        <p className="card-text">2. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div> 
                    </div>
                }
                {secondPanel === 3 && 
                    <div>
                        <img src={photo3} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                        <p className="card-text">3. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div> 
                    </div>
                }
            </div>
            <div className="card select-to" onClick={moveTo}>
                {thirdPanel === 1 &&
                    <div>
                        <img src={photo1} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                        <p className="card-text">1. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div> 
                    </div>
                }
                {thirdPanel === 2 &&
                    <div>
                        <img src={photo2} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                        <p className="card-text">2. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div> 
                    </div>
                }
                {thirdPanel === 3 && 
                    <div>
                        <img src={photo3} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                        <p className="card-text">3. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div> 
                    </div>
                }
            </div>
        </>
    )
}

export default SecMostrary;
