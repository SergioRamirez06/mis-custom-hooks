import { useState } from "react"


export const useCounter = ( inicialValue =  10 ) => {
    
    const [counter, setCounter] = useState( inicialValue )

    const incrementar = ( value = 1 ) => {
        setCounter( current => current + value )
    }

    const decrement = ( value = 1 ) => {
        setCounter( counter - value )
    }

    const reset = () => {
        setCounter( inicialValue )
    }

    return {
        counter,
        incrementar,
        decrement,
        reset
    }
}