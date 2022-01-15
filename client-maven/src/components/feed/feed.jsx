import React from 'react'
import { CardList } from './cardList/cardList'

export const Feed = ({groupName}) => {
    return (
        <div>
            <div className='Feed-group'>
            <span>{groupName}</span>
            <a href="#chat"><img src="/images/arrow.svg" alt="arrow" /></a>
            </div>
            <div className='Card-List'>

            <CardList />
            </div>
            <div className='Menu'>
                <img src="/images/home.svg" alt="Home" />
                <img src="/images/Add.svg" alt="Add" />
                <img src="/images/Profile.svg" alt="profile" />
            </div>
        </div>
    )
}
