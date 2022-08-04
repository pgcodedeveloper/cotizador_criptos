import React from 'react'
import styled from '@emotion/styled'
import IconoCerrar from '../img/close_26px.png'


const Texto= styled.div`
    color: white;
    border-left: 2px solid #c50101;
    background-color: #a71515cf;
    padding: 1rem;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
`

const Alerta = ({alerta}) => {

    return (
        <Texto>{alerta}</Texto>
    )
}

export default Alerta
