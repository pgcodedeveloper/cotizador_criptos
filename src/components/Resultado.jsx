import styled from '@emotion/styled'
import React from 'react'

const Resul = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`

const Texto= styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
    }
`
const Imagen= styled.img`
    width: 120px;
    display: block;
`
const Precio = styled.p`
    font-size: 25px;
    
    span{
        font-weight: 700;
        color: cyan;
    }
`
const Resultado = ({resultado}) => {

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL,LASTUPDATE}= resultado;
    
    return (
        <Resul>
            <Imagen src={`https://www.cryptocompare.com/${IMAGEURL}`} alt="Imagen cripto"/>

            <div>
                <Precio>El Precio es de: <span>{PRICE}</span></Precio>
                <Texto>Precio más alto del día: <span>{HIGHDAY}</span></Texto>
                <Texto>Precio más bajo del día: <span>{LOWDAY}</span></Texto>
                <Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Última Actualización: <span>{LASTUPDATE}</span></Texto>
            </div>
            
        </Resul>
    )
}

export default Resultado
