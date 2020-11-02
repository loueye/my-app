import React from 'react';
import '../App.css';

export function Row({user}) {
    return (
        <tr>
            <td><img src={user.picture.thumbnail}/></td>
            <td>{user.name.first}</td>
            <td>{user.name.last}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
        </tr>
        )
}
