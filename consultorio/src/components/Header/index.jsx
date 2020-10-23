import React from "react"
import "./Header.css"
import img from "../../asset/denteok.png"

const Header = () => {
    return (
        <>
            <header className="Header">
                <div className="row">
                        <div className="column">
                            <img className="icone" src={img} alt="" />
                        </div>
                        <div className="column2">
                            <h2>Clínica Dentária</h2>
                        </div>
                

                <div className="column nav">Tratamentos</div>
                <div className="column nav">Sobre</div>
                <div className="column nav">Localização</div>
                </div>
                {/* <li className="menu-item"><Link to= "/produto">Produto</Link></li> */}
        </header>


        </>
    )
}

export default Header