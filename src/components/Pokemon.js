import React, {useState, useEffect} from 'react'
//Importar IMG de la carpeta assets
import Golisopod from "../assets/images/pokemon3.png"
import Buzzwole from "../assets/images/pokemon2.png"
import TapuLele from "../assets/images/pokemon4.png"
//Importar elemento para la base de las cartas
import PokemonFragment from './Fragments/PokemonFragment'
//Importar CSS par un mejor estilo
import "../components/Pokemon.css";

const Pokemon = () => {

    return (
        <>
        <body>
          <div className='container'>
          <br/>

            <div className='row'>
                <div className='col-12'>
                  <h1>Pokémon  favoritos  de  Alola</h1>
                </div>
            </div>
            <br/>
            <br/>

            <div className='row'>

                <div className='col-4'>
                    <PokemonFragment
                         titulo="Golisopod"
                         imagen={Golisopod}
                         textoDescripcion="Hace lo que sea por conseguir la victoria.  Si el rival se descuida, no dudará en asestarle un golpe letal con su ataque escaramuza."
                         dexNumber="N° 768"
                    />
                </div>

                <div className='col-4'>
                    <PokemonFragment
                         titulo="Tapu Lele"
                         imagen={TapuLele}
                         textoDescripcion="Es la guardiana de la isla Akala. Se dice que la fragancia de las flores son su fuente de energía."
                         dexNumber="N° 786"
                    />
                </div>

                <div className='col-4'>
                    <PokemonFragment
                         titulo="Buzzwole"
                         imagen={Buzzwole}
                         textoDescripcion="Un Ultraente rodeado de misterio. Se le ha visto reducir a añicos un camión de un solo puñetazo."
                         dexNumber="N° 794"
                    />
                </div>

            </div>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

          </div>
        </body>
        </>
    )
}
export default Pokemon