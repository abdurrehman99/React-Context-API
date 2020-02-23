import React, { useEffect,useState } from 'react';
import axios from 'axios'
const Context = React.createContext();

export const MyContext = (props) =>{
    
    let initialState = {
        users : [ ]
    }
    const [ state,setState ] = useState(initialState);
    
    useEffect( ()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then( (res)=> {
            setState({
                users : res.data
            })
        })
        .catch( err=> console.log(err));
    },[]);

    return (
        <Context.Provider value = { state.users }>
            { props.children }
        </Context.Provider>
    )
        
    
}

export const Users = Context.Consumer;

