import { useEffect, useState } from "react"


const localCache = {};

export const useFech = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null

    });

    useEffect(() => {
        getFetch();
    }, [ url ])

    const setLoading = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        })
    }

    const getFetch = async() => {

        if( localCache[url] ){
            console.log('Usando Cache')
            setLoading({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null
            })

            return;
        }

        setLoading();

        const resp = await fetch(url);

        if( !resp.ok ){
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error:{
                    code: resp.status,
                    messege: resp.statusText
                }
            });
            return        
        }
        const data = await resp.json();
        setState({     
            data: data,
            isLoading: false,
            hasError: false,
            error:  null
        }
        )

        localCache[url] = data;

    }
    
  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  }
}
