import React, { useState } from 'react'

const Header = ({className, header, onClick}) => {
    return (
        <div className='flex justify-center'>
            <h1 className={`flex justify-center uppercase w-full ${className}`} onClick={onClick}>{header}</h1>
        </div>
    )
}

export default Header