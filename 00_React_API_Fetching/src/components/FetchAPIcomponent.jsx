import React, {useState,useEffect} from "react";

function FetchAPIcomponent () {

    const [data,setData] = useState(null);

    // useEffect Syntax
    
    // useEffect(() => { 
    //      Side effect code. 
    // }, [dependencies]);

    useEffect = (() => {

    const fetchData = () => {
        // need to write code
    }, []);




    }



    return (
        <p>This is Fetch API Component</p>
    );

}

export default FetchAPIcomponent;