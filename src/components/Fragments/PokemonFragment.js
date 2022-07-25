import React, {useState, useEffect} from 'react'
import vector from "../Fragments/pokemon1.png"

const PokemonFragment = ({ imagen, titulo, textoDescripcion, dexNumber}) => {

    return(
        <>
        <div className="card" style={{width: "15rem"}}>
                        <h5 className="card-title">{titulo}</h5>
                        <img src={imagen} className="card-img-top" alt="..."/>
                        <img src={vector} className="vector"/>
                     <div className="card-body">
                        <h7 className="numero">Pokémon {dexNumber}</h7>
                        <p className="card-text">{textoDescripcion}</p>
                     </div>
                  </div>
        </>
    )
}

export default PokemonFragment