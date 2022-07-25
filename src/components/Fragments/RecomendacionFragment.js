import React, {useState, useEffect} from 'react'

const RecomendacionFragment = ({titulo, children, tipoAlerta}) => {

    return(
        <>
        
          <div className={`alert ${tipoAlerta}`} role='alert'>
                <h4 className='alert-heading'>{titulo}</h4>
                <br/>
                <p>{children}</p>
                <br/>
          </div>
        
        </>
    )
}
export default RecomendacionFragment
