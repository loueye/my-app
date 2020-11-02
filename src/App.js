import React from 'react';
import './App.css';
import {Table} from './Table';
import axios from 'axios';
import { useState, useEffect, setState } from 'react';


function ButtonPrayForMe({children, onClicket}) {
    return (
        <button onClick={onClicket} className="btn btn-success fixed-bottom w-100">{children}</button>
    )
}

function Search() {
    const [userSearch, changeUserValue] = useState('')
    const changeUserSearch = (test) => {
        console.log(test);
    }
    return (
        <input type="text" onChange={event => changeUserSearch(event.target.value)} />
    )
}

function App() {

    const [users,setUser] = useState([]);
    // Similaire à componentDidMount et componentDidUpdate :
    const fetchUsers = async (nb) => {
        try {
            const res = await axios.get('https://randomuser.me/api/?results='+nb);
            setUser((oldUsers) => [...oldUsers, ...res.data.results])
            console.log('Fetch');
        }
        catch(e) {
            console.log(e)
            return[];
        }
    }

    useEffect(() => {
        // Met à jour le titre du document via l’API du navigateur
        fetchUsers(5)
    },[]);

    return (
        <div className="App"> {/* DIV ENGLOBANTE */}
            <h1>Fetch toi</h1>
            <Search/>
            <ButtonPrayForMe onClicket={() => fetchUsers(10)}>Fetch</ButtonPrayForMe>
            <Table users={users}/>
        </div>
      );
}

export default App;
