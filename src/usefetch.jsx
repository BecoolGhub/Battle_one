import { useState } from 'react';
import { useEffect } from 'react';


const useFetch = () => {

    const [data, setData] = useState(null);

    const [dummy , setDummy] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => { 
        fetch('http://localhost:3000/courses')
        .then(response => {
            console.log(response);
            return response.json()
        })
        .then(data => setData(data))
        .catch((error)=> {
            console.log(error.message);
            setError(error.message)
        })
    }, []);

    return [data, dummy, error]   
}

export default useFetch;