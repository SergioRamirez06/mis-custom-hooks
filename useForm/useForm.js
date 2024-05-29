import { useState } from "react"

export const useForm = ( inicialValue = {} ) => {
  
    const [formState, setFormState] = useState( inicialValue )

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    const onReset = () => {
        setFormState( inicialValue )
    }

  return {
    ...formState,
    formState,
    onInputChange,
    onReset
  }
}
