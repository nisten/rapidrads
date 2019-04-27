import React from 'react'

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

const nestedLists = [list, list];

const NestedList = () => (
    <ul>
        {nestedLists.map((nestedList, index) => (
           <ul key={index}>
                <h4> List {index + 1}</h4>
                {nestedList.map(item => (
                    <li key={item.id}>
                        <div>{item.id}</div>
                        <div>{item.firstname}</div>
                        <div>{item.lastname}</div>
                        <div>{item.year}</div>
                    </li>
                ))}
           </ul>
        ))}
    </ul>
);

export default NestedList;