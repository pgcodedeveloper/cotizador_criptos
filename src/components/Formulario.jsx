import styled from '@emotion/styled'
import {useState,useEffect} from 'react'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'
import Alerta from './Alerta'


const InputSubmit= styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transform: background-color;
    transition-property: all;
    transition-duration: 500ms;
    transition-timing-function: ease-in-out;

    &:hover{
        cursor: pointer;
        background-color: #7c81fd;
    }
`
const Formulario = ({setMonedas}) => {
    
    const [criptos, setCriptos] = useState([]);
    const [error,setError] = useState(false);
    const [ moneda, SelectMonedas] = useSelectMonedas("Elige tu moneda",monedas);
    const [ cripto, SelectCriptos] = useSelectMonedas("Elige tu Criptomoneda",criptos);
    
    useEffect( () =>{
        const consultarAPI = async ()=> {
            
            try {
                const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';
                const respuesta= await fetch(url);
                const resultado = await respuesta.json();

                const arrayCriptos= resultado.Data.map( cripto => {
                    const objeto= {
                        id: cripto.CoinInfo.Name,
                        nombre: cripto.CoinInfo.FullName
                    };
                    return objeto
                });
                setCriptos(arrayCriptos);
            } catch (error) {
                console.log(error)
            }
        }
        consultarAPI();
    },[]);

    const handleSubmit = e =>{
        e.preventDefault();
        if([moneda,cripto].includes('')){
            setError(true);
            return;
        }

        setError(false);

        setMonedas({
            moneda,
            cripto
        })

    }
    return (

        <>
            {error && <Alerta alerta="Todos los campos son obligatorios"></Alerta>}
            <form onSubmit={handleSubmit}>
                <SelectMonedas />
                <SelectCriptos/>
                <InputSubmit type="submit" value='Cotizar' />
            </form>
        </>
    )
}

export default Formulario
