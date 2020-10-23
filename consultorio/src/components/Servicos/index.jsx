import React from "react"
import "./Servicos.css"

const Servicos = () => {
    return(    
        <section className="Tratamentos">
            <h1>Tratamentos</h1>
            <div className="box box-1">
                <div className="trat profilaxia">
                    <div className="imagem"></div>
                    <p>PROFILAXIA</p>
                </div>
                <div className="trat clareamento">
                    <div className="imagem"></div>
                    <p>CLAREAMENTO</p>
                </div>
                <div className="trat implante">
                    <div className="imagem"></div>
                    <p>IMPLANTE</p>
                </div>
            </div>
            <div className="box box-2">
                <div className="trat aparelho">
                    <div className="imagem"></div>
                    <p>APARELHO DENTÁRIO</p>
                </div>
                <div className="trat crianca">
                    <div className="imagem"></div>
                    <p>CUIDADOS PARA CRIANÇAS</p>
                </div>
                <div className="trat mau-halito">
                    <div className="imagem"></div>
                    <p>MAU-HÁLITO</p>
                </div>
            </div>
        </section>
    )
}

export default Servicos