import React from 'react'
import Header from './Header'
const Content = ({imgSrc, contentIntro, contentParagraph, contentHeader}) => {
    return(
        <div className='bg-red-900 pt-4 pb-8 px-8 mb-1 rounded-b-full'>
            <Header className='tflex justify-center ext-2xl mb-4' header={contentHeader}/>
            <p className='flex justify-center w-full text-xl'>{contentIntro}</p>
            <img src={imgSrc} className='flex justify-center ml-auto mr-auto h-13'></img>
            <p className='flex justify-center mt-4 px-12'>{contentParagraph}</p>
        </div>
    )
}

export default Content