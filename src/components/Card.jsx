import { useState } from 'react'

function Card({ card, index, clickhandler }) {

    const cardClassName = card.status ? 'active' : ''
 
    return (
      <div className={`card ${card.status}`} onClick={() => clickhandler(index)}>
        <img src={card.img} alt={card.name} />
      </div>
    );
  }

  export default Card