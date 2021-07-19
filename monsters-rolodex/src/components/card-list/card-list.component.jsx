import React from 'react';
import {Card} from '../card/card.component'; 
import './card-list.styles.css'


export const CardList = (props) => {
    
    return(
      <div className='card-list'>
          
          <h2>{props.name}</h2>
          { 
            props.monster.map ( monster => 
                ( <Card key={monster.id } monster={monster} />   ) )
          }

      </div>  
    );
} ;