import React from 'react'
import './Footer.css'

const Footer = () =>{
    return(
        <footer className="container">
            <div className="caixa-1">
                <div>
                    <h2>Avaliação Dentista</h2>
                    <ul>
                    <li>
                    Avaliação Dentista
                    </li>
                    <li>
                    Limpeza
                    </li>
                    <li>
                    Aparelho
                    </li>
                    <li>Raspagem</li>
                    </ul>

                </div>
                </div>

                <div className="caixa-2">
                <h2>Central de Atendimento</h2>
                    <p>11 4652.5400</p>
                    <span>Segunda a Sexta: 08h às 18h</span>

                </div>

                <div className="caixa-3">
                <h2 className="h2-color">Onde Estamos?</h2>
                    <p>Estrada de Santa Isabel, 1647 Cj 32
Arujá - SP - Brasil</p>

                </div>

        </footer>
    )
}

export default Footer