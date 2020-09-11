import React from 'react';

function Ninjas({ ninjas, deleteNinja }) {
    const ninjasList = ninjas.map(ninja => {
       
            return ninja.age > 30 ? (
                <div key={ninja.id}>
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>Belt: {ninja.belt}</div>
                    <button onClick={deleteNinja(ninja.id)}>Delete ninja</button>
                </div>
            ) : null;
    })

    return (
        <div>
            {ninjasList}
        </div>
    )
}

export default Ninjas;