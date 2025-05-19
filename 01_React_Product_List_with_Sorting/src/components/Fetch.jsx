import React, { useState, useEffect } from 'react';

const Fetch = () => {
    const api = 'https://fakestoreapi.com/products?sort=asc';

    const [data, setData] = useState([]);

    // Sytax for fetch API
    // fetch(url, options)
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.error('Error:', error));
    
    useEffect(() => {
        fetch(api)
            .then(response => response.json())
            .then(data => console.log(data), setData(data))
            .catch(error => console.log('Error: ', error))

    }, []);

    return (

           
<h1>ghgkj</h1>
    );
};

export default Fetch;