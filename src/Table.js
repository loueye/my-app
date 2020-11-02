import React from 'react';
import './App.css';
import {TableHead} from './table/TableHead';
import {Row} from './table/TableBody';

/* On créé les données via un tableau qu'on passe ensuite pour chaque ligne du tableau */
let data = [
    {
        'id' : 'user-1',
        'firstName' : 'Loueye',
        'lastName' : 'Ghandriche',
        'email' : 'loueye@coucou.fr',
        'phone' : '00 00 00 00 00',
    },
    {
        'id' : 'user-2',
        'firstName' : 'Antoine',
        'lastName' : 'Châtenet',
        'email' : 'antoine@coucou.fr',
        'phone' : '00 00 00 00 00',
    },
]

export function Table({users}) {
    return (
        <table id="tbl-users" className="table table-hover">
            <TableHead/>
            <tbody>
                { users.map(user => <Row key={user.login.uuid} user={user}/>)}
            </tbody>
        </table>
        )
}

/* On fait un foreach dans lequel chaque user = une ligne du tabeau data */