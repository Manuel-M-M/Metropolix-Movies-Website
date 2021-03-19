import React, { useReducer } from 'react';
import AlertReducer from './AlertReducer';
import AlertContext from './AlertContext';

import { MOSTRAR_ALERTA, OCULTAR_ALERTA} from '../../types';

const AlertaState = props => {
    const initialState = {
        alerta: null
    }

    const [ state, dispatch ] = useReducer(AlertReducer, initialState);

    // Funciones
    const mostrarAlerta = (msg, categoria) => {
        dispatch({
            type:  MOSTRAR_ALERTA,
            payload: {
                msg, 
                categoria
            }
        });

        // Después de 5 segundos limpiar la alerta
        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA
            })
        }, 5000);
    }


    return (
        <AlertContext.Provider
            value={{
                alerta: state.alerta,
                mostrarAlerta
            }}
        > 
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertaState;