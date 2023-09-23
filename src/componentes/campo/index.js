import { useState } from "react";
import "./campo.css"

const Campo = (props) => {
    //console.log("Datos: ",props.titulo) la manera de llamar un elemento de un props

    //Destructuracion 
    const {type = "text"} = props
    //console.log(type);

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value);
    }
    
    const placeholderModificado = `${props.placeholder}...`;
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderModificado} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
        
    </div>
}

export default Campo