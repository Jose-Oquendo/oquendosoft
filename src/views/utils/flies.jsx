import { useEffect, useRef } from "react";

function Flies(){
    const starsRef = useRef(null);
    const numStars = 100;

    useEffect(() => {
        const starContainer = starsRef.current;
        starContainer.innerHTML = "";
        
        for (let i = 0; i < numStars; i++) {
            let star = document.createElement("div");
            star.classList.add("star");
            star.style.top = Math.random() * 100 + "vh";
            star.style.left = Math.random() * 100 + "vw";
            
            let isLarge = Math.random() > 0.9;
            let size = isLarge ? Math.random() * 4 + 2 : 2;
            star.style.width = size + "px";
            star.style.height = size + "px";
            
            if (isLarge) {
                star.style.background = "lightblue";
            } else {
                star.style.background = "white";
            }
            
            star.style.animationDuration = (Math.random() * 4 + 6) + "s";
            star.style.animationDelay = (Math.random() * 3) + "s";
            
            starContainer.appendChild(star);
        }
    }, []);
    
    return (
        <>
            <div className="stars" ref={starsRef}></div>
        </>
    )
}

export default Flies
