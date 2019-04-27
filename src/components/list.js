import React from 'react';

const list = [
    {
        id: 'a',
        firstname: 'Nisten',
        lastname: 'Tahiraj',
        year: 1990,
    },
    {
        id: 'b',
        firstname: 'Lou',
        lastname: 'Cat',
        year: 2002,
    },
];

const ComplexList = () => ( 
    <ul>
        {list.map(item => (
            <li key={item.id}>
                <div>{item.id}</div>
                <div>{item.firstname}</div>
                <div>{item.lastname}</div>
                <div>{item.year}</div>
            </li>
        ))}
    </ul>
);
export default ComplexList;
