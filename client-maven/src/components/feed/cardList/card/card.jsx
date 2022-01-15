import React from 'react'
import './card.scss'
export const Card = ({ userName,userlogo,Post, Like }) => {
    return (
        <div className='Card'>
          <div className='Card-Heading'>
          <h2>{userName}</h2>
          <img src={userlogo} alt={userName} />

          </div>
          <div className='Card-img'>
            <img src={Post} alt="Post" />
          </div>
          <div className='Card-like'>
            <span>{Like}</span>
            <span>Comments</span>
          </div>
          
        </div>
    )
}
