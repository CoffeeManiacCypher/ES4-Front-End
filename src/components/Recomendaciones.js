import React, {useState, useEffect} from 'react'
import RecomendacionFragment from './Fragments/RecomendacionFragment'
import Mascarilla from "../assets/images/icono1.png"
import Distancia from "../assets/images/icono2.png"
import "../components/Fragments/Recomendacion.css";

const Recomendaciones = () => {

    return(
        <>
        <br/>
         <div className='container'>
            <div className='row'>
                <h1>Recomendaciones para prevenir el COVID-19</h1>
            </div>
            <br/>

            <div className='row'>
               <center>
                <div className='col-6'>
                  <RecomendacionFragment
                      tipoAlerta="alert-danger"
                      titulo="Mantenga distancia">
                      Evite las multitudes y practique el distanciamiento social.
                      <br/>
                      <img src={Distancia} alt="..."/>
                  </RecomendacionFragment>
                </div>

                <div className='col-6'>
                  <RecomendacionFragment
                      tipoAlerta="alert-success"
                      titulo="Use mascarilla">
                      Usela correctamente, tapando la nariz y boca.
                      <br/>
                      <img src={Mascarilla} alt="..."/>
                  </RecomendacionFragment>
                </div>
               </center>
            </div>
         </div>
        </>
    )
}
export default Recomendaciones
