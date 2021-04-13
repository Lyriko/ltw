import React, {useState} from 'react'
import HoverElm from './HoverElm'

const Nav = () => {
    const [divHovered, setDivHovered] = useState(false)

    function handleEnter() {
        setDivHovered(!divHovered)
    }
    function  handleLeave() {
        setDivHovered(!divHovered)
    }
    function handleClick() {
        console.log('clicked')
    }

    const buttons = ['ME', 'YOU', 'THE WORLD!']
    const button = buttons.map((element, i) =>
        <HoverElm text={element} className={`bg-red-900 transition-all duration-150 ease-in-out ${divHovered ? '' : 'hidden'}`} id={buttons[i]}/>)

    return (
        <div className='fixed left-0 right-0' >
            <div
                className='flex flex-row flex-initial justify-start content-center items-center pl-1 h-11 gap-0.5 bg-black pb-1'
                onMouseEnter={() => handleEnter()}
                onMouseLeave={() => handleLeave()}
                onClick={() => handleClick()}
            >
                <HoverElm text={'MENU'} className={`${divHovered ? 'bg-blue-900' : 'bg-red-900'} transition duration-2 ease-in-out`} id={'MENU'}
                />
                {divHovered ? button : null}
            </div>
        </div>
    )
}

export default Nav