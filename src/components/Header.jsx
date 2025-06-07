import React from 'react'
import ChevronLeftIcon from '../assets/svg/chevron-left-icon.svg'

const Header = ({text, children}) => {
    return (
        <div className='text-blue flex items-center justify-between'>
            <button>
                <img src={ChevronLeftIcon} alt="chevron-left-icon" />
            </button>
            <h1>{text}</h1>

            <div>{children}</div>
        </div>
    )
}

export default Header