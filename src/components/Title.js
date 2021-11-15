import React from 'react';
import List from './List';

const Title = (props) => {
    const {title, alertTitle, profil, profiles} = props;

    alertTitle()
return (
        <div>
            <h1>
                {JSON.stringify(profil)}
                {JSON.stringify(profiles)}
                Title: {title} || {profil.name} || {profil.location}
            </h1>
            <h1>List Data:</h1>
            <ul>
                {profiles.map((profils) => (
                    <List name={profils.name}/>
                ))}
            </ul>
        </div>
    )
}

export default Title
