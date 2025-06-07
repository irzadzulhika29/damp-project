import React from 'react'

const Button = ({ text, onClick, className }) => {
    return (
        <button onClick={onClick} className={` bg-gradient-blue text-white py-3 rounded-full ${className}`}>
            {text}
        </button>
    )
}

export default Button