import React, {useState} from 'react'

const HoverElm = ({text, className, id}) => {
    const [hovered, setHovered] = useState(false)

    function handleEnter() {
        setHovered(!hovered)
    }
    function  handleLeave() {
        setHovered(!hovered)
    }
    return (
        <span className={`${hovered ? 'bg-blue-900' : className} p-2 rounded`}
            onMouseEnter={() => handleEnter()}
            onMouseLeave={() => handleLeave()}
        >
            {text}
        </span>
    )
}

export default HoverElm