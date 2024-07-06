import React from "react"
import { useNavigate } from "react-router-dom"

const Menu: React.FC = ()=> {
    const navigate = useNavigate()

    function play() {
        navigate('/game')
    }

    return(
        <button onClick={play}>
            Play
        </button>
    )
}

export default Menu